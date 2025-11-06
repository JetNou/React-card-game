import styles from './SettingMenu.module.css'
import {useIsOpenSetting} from "../../store/useHeader.ts";

export const SettingMenu = () => {
  const isOpenSetting = useIsOpenSetting()

  return (
    <aside className={`${styles.aside} ${isOpenSetting ? styles.active : ""}`}>
      <h1 className={styles.title}>Настройки</h1>
    </aside>
  )
}