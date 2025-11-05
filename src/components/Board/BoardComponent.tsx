import styles from './Board.module.css'
import {CardComponent} from "../Card/CardComponent.tsx";
import {useCardClick, useCards} from "../../store/useBoard.ts";

export const BoardComponent = () => {
  const cards = useCards()
  const handleCardClick = useCardClick()

  return (
    <div className={styles.board}>
      {
        cards.map((card, index) =>
          <CardComponent
            key={index}
            card={card}
            onClick={() => handleCardClick(index)}
          />
        )
      }
    </div>
  )
}