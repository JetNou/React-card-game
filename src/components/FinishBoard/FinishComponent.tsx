import styles from './FinishBoard.module.css'
import {useFinishButtonClick} from "../../store/useBoard.ts";

export const FinishBoard = () => {
  const finishButtonClick = useFinishButtonClick()

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h1 className={styles.title}>Поздравляем! </h1>
        <p className={styles.description}>Вы нашли все пары!</p>
        <button
          className={styles.button}
          onClick={finishButtonClick}
        >Начать заново</button>
      </div>
    </div>
  )
}