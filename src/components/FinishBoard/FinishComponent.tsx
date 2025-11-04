import styles from './FinishBoard.module.css'

interface FinishBoardProps {
  onClick: () => void
}

export const FinishBoard = ({onClick}: FinishBoardProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h1 className={styles.title}>Поздравляем! </h1>
        <p className={styles.description}>Вы нашли все пары!</p>
        <button
          className={styles.button}
          onClick={onClick}
        >Начать заново</button>
      </div>
    </div>
  )
}