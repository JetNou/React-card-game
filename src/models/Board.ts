import {Card} from './Card.ts';
import { Fruits, type Fruit } from "../types/Fruits";

export class Board {
  cards: Card[] = []

  initCards() {
    const arrFruits: Fruit[] = Object.values(Fruits).reduce((acc, fruit) => {
      acc.push(fruit, fruit)
      return acc
    }, [] as Fruit[])

    const randomArr: Fruit[] = this.shuffleArray<Fruit>(arrFruits)

    for (let i = 0; i < arrFruits.length; i++) {
      this.cards.push(new Card(randomArr[i]))
    }
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
}