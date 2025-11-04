import styles from './Header.module.css'
import {SettingButton} from "../SettingIcon/SettingButton.tsx";
import {SettingMenu} from "../SettingMenu/SettingMenu.tsx";
import {useState} from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSettingClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div className={styles.header}>
        <SettingButton onClick={handleSettingClick} />
      </div>
      <SettingMenu isOpen={isOpen} />
    </>
  )
}