import styles from './SettingMenu.module.css'
import {useState} from "react";
import * as React from "react";
import {useIsOpenSetting} from "../../store/useHeader.ts";

export const SettingMenu = () => {
  const isOpenSetting = useIsOpenSetting()

  const [selectedValue, setSelectedValue] = useState('44');

  const handleSelectClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <aside className={`${styles.aside} ${isOpenSetting ? styles.active : ""}`}>
      <h1 className={styles.title}>Настройки</h1>

      <h3 className={styles.polya}>Поле</h3>
      <select
        onChange={handleSelectClick}
        value={selectedValue}
        className={styles.select}
      >
        <option value="22">2x2</option>
        <option value="32">3x2</option>
        <option value="42">4x2</option>
        <option value="43">4x3</option>
        <option value="44">4x4</option>
      </select>
    </aside>
  )
}