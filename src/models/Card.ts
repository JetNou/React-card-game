import type { Fruit } from "../types/Fruits.ts";

export class Card {
  fruit: Fruit
  isFlipped: boolean = false
  isMatched: boolean = false

  constructor(fruit: Fruit) {
    this.fruit = fruit
  }
}