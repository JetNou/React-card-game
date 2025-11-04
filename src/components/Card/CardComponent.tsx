import styles from './Card.module.css'
import type {Card} from "../../models/Card.ts";

interface CardProps {
  card: Card
  onClick: () => void
}

export const CardComponent = ({card, onClick}: CardProps) => {
  const imgUrl = new URL(`../../assets/fruits/${card.fruit}.jpeg`, import.meta.url).href

  return (
    <div
      onClick={onClick}
      className={`${styles.card} ${card.isFlipped ? styles.flipped : ""}`}
    >
      <div className={styles.front}>
      </div>
      <div className={styles.back}>
        <img
          className={styles.image}
          src={imgUrl}
          alt={card.fruit}
        />
      </div>
    </div>
  )
}