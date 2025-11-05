import styles from './Header.module.css'
import {SettingButton} from "../SettingButton/SettingButton.tsx";
import {SettingMenu} from "../SettingMenu/SettingMenu.tsx";
import {Authorization} from "../Authorization/Authorization.tsx";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <SettingButton />
        <Authorization />
      </div>
      <SettingMenu />
    </>
  )
}