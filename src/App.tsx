import {BoardComponent} from "./components/Board/BoardComponent.tsx";
import {FinishBoard} from "./components/FinishBoard/FinishComponent.tsx";
import styles from "./App.module.css"
import {Header} from "./components/Header/Header.tsx";
import {useIsFinish, useIsLoading} from "./store/useBoard.ts";

export const App = () => {
  const isFinish = useIsFinish()
  const isLoading = useIsLoading()

  return (
    <div className={styles.block}>
      {isFinish && <FinishBoard />}

      <Header />

      {
      isLoading ?
        <h1 className={styles.title}>...Loading</h1> :
        <BoardComponent />
      }
    </div>
  )
}
