import {create} from 'zustand'
import {Board} from "../models/Board.ts";
import type {Card} from "../models/Card.ts";

interface IBoard {
  cards: Card[];
  selectedCards: Card[];
  isChecking: boolean;
  isFinish: boolean;
  isLoading: boolean;
  matchedPairs: number;
  restart: () => void;
  cardClick: (index: number) => void;
  finishButtonClick: () => void;
  checkMatch: () => void;
}

const BoardStore = create<IBoard>()((set, get) => ({
  cards: (() => {
    const initialBoard = new Board()
    initialBoard.initCards()
    return initialBoard.cards
  })(),
  selectedCards: [],
  isChecking: false,
  isFinish: false,
  isLoading: false,
  matchedPairs: 0,
  restart: () => {
    const newBoard = new Board()
    newBoard.initCards()
    set({
      cards: newBoard.cards,
      isChecking: false,
      selectedCards: [],
      matchedPairs: 0,
      isFinish: false,
      isLoading: false,
    })
  },
  cardClick: (index) => {
    const state = get()
    const cards = [...state.cards]
    const card = cards[index]

    if (state.isChecking || card.isFlipped || card.isMatched) {
      return
    }

    cards[index] = {...card, isFlipped: true}

    const newSelectedCard = [...state.selectedCards, cards[index]]
    set({
      cards: cards,
      selectedCards: newSelectedCard
    })

    if (newSelectedCard.length === 2) {
      set({isChecking: true})
      setTimeout(() => {
        get().checkMatch()
      }, 0)
    }
  },
  finishButtonClick: () => {
    set({isFinish: false})
    get().restart()
    set({isLoading: true})
    setTimeout(() => {
      set({isLoading: false})
    }, 600)
  },
  checkMatch: () => {
    const state = get()
    const [firstCard, secondCard] = state.selectedCards
    const cards = [...state.cards]

    const firstIndex = cards.findIndex(c => c === firstCard)
    const secondIndex = cards.findIndex(c => c === secondCard)

    if (firstCard.fruit === secondCard.fruit) {
      cards[firstIndex] = {...firstCard, isMatched: true}
      cards[secondIndex] = {...secondCard, isMatched: true}

      const newMatchedPairs = state.matchedPairs + 1

      set({
        cards: cards,
        selectedCards: [],
        isChecking: false,
        matchedPairs: newMatchedPairs,
        isFinish: newMatchedPairs === 8
      })
    } else {
      setTimeout(() => {
        const currentCards = [...get().cards]
        currentCards[firstIndex] = {...currentCards[firstIndex], isFlipped: false}
        currentCards[secondIndex] = {...currentCards[secondIndex], isFlipped: false}

        set({
          cards: currentCards,
          selectedCards: [],
          isChecking: false,
        })
      }, 1000)
    }
  }
}))

export const useCards = () => BoardStore((state) => state.cards)
export const useSelectedCards = () => BoardStore((state) => state.selectedCards)
export const useIsChecking = () => BoardStore((state) => state.isChecking)
export const useIsFinish = () => BoardStore((state) => state.isFinish)
export const useIsLoading = () => BoardStore((state) => state.isLoading)
export const useMatchedPairs = () => BoardStore((state) => state.matchedPairs)


export const useRestart = () => BoardStore((state) => state.restart)
export const useCardClick = () => BoardStore((state) => state.cardClick)
export const useFinishButtonClick = () =>  BoardStore((state) => state.finishButtonClick)