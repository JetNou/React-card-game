import {BoardComponent} from "./components/Board/BoardComponent.tsx";
import {FinishBoard} from "./components/FinishBoard/FinishComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";
import type {Card} from "./models/Card.ts";
import styles from "./App.module.css"
import {Header} from "./components/Header/Header.tsx";

export const App = () => {
  const [board, setBoard] = useState(new Board())
  const [selectedCards, setSelectedCards] = useState<Card[]>([])
  const [isChecking, setIsChecking] = useState(false)
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [isFinish, setIsFinish] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    restart()
  }, [])

  useEffect(() => {
    if (selectedCards.length === 2) {
      setIsChecking(true)
      checkMatch()
    }
  }, [selectedCards])

  useEffect(() => {
    if (matchedPairs === 8) {
      setIsFinish(true)
    }
  }, [matchedPairs]);


  function restart() {
    const newBoard = new Board()
    newBoard.initCards()
    setBoard(newBoard)
    setSelectedCards([])
    setIsChecking(false)
  }

  const handleCardClick = (card: Card) => {
    if (isChecking || card.isFlipped || card.isMatched) {
      return
    }

    card.isFlipped = true
    setSelectedCards([...selectedCards, card])
  }

  const handleFinishButtonClick = () => {
    setIsFinish(false)
    restart()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 600)
  }

  function checkMatch() {
    const [firstCard, secondCard] = selectedCards

    if (firstCard.fruit === secondCard.fruit) {
      firstCard.isMatched = true
      secondCard.isMatched = true
      setSelectedCards([])
      setIsChecking(false)
      setMatchedPairs((prev) => prev + 1)
    } else {
      setTimeout(() => {
        firstCard.isFlipped = false
        secondCard.isFlipped = false
        setSelectedCards([])
        setIsChecking(false)
      }, 1000)
    }
  }

  return (
    <div className={styles.block}>

      {isFinish && <FinishBoard onClick={handleFinishButtonClick}/>}

      <Header />

      {
        isLoading ?
          <h1 className={styles.title}>...Loading</h1> :
          <BoardComponent board={board} onCardClick={handleCardClick} />
      }
    </div>
  )
}
