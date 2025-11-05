import styles from './Ligin.module.css'

export const Login = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <input className={styles.inputLogin} type="text" placeholder='Login' />
        <input className={styles.inputPassword} type="password" placeholder='Password' />

        <button
          className={styles.button}
          type='submit'
        >Войти</button>
      </form>
    </div>
  )
}