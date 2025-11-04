import styles from './Board.module.css'
import {CardComponent} from "../Card/CardComponent.tsx";
import type {Board} from "../../models/Board.ts";
import {Card} from '../../models/Card.ts'

interface BoardProps {
  board: Board,
  onCardClick: (card: Card) => void
}

export const BoardComponent = ({board, onCardClick}: BoardProps) => {
  return (
    <div className={styles.board}>
      {
        board.cards.map((card) =>
          <CardComponent
            card={card}
            onClick={() => onCardClick(card)}
          />
        )
      }
    </div>
  )
}