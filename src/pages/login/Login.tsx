import styles from './Ligin.module.css'
import {useState} from "react";
import {Link} from "react-router";

export const Login = () => {
  const [valueLogin, setValueLogin] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [passwordShow, setPasswordShow] = useState(false)

  const handleClickButtonSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClickButtonShow = () => {
    setPasswordShow((prev) => !prev)
  }



  return (
    <>
      <Link
        to='/'
        className={styles.buttonBack}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0287 5.25L6.27866 12L13.0287 18.75L11.4377 20.341L3.09668 12L11.4377 3.65901L13.0287 5.25Z" fill="#000"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 10.875H20.4375V13.125H4.5V10.875Z" fill="#000"/>
        </svg>
      </Link>
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <input
            className={styles.inputLogin}
            type="text"
            placeholder='Login'
            value={valueLogin}
            onChange={(e) => setValueLogin(e.target.value)}
          />
          <p></p>

          <div className={styles.inputWithButton}>
            <input
              className={styles.inputPassword}
              type={`${passwordShow ? "text" : "password"}`}
              placeholder='Password'
              value={valuePassword}
              onChange={(e) => setValuePassword(e.target.value)}
            />
            <button
              className={styles.buttonShow}
              onClick={handleClickButtonShow}
              type='button'
            >
              {passwordShow ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#fff"/>
                  <path d="M18.5072 6.61781C16.4578 5.2125 14.2645 4.5 11.9887 4.5C9.94078 4.5 7.94438 5.10937 6.05484 6.30375C4.14938 7.51078 2.28141 9.70312 0.75 12C1.98844 14.0625 3.6825 16.1831 5.44687 17.3991C7.47094 18.7931 9.67172 19.5 11.9887 19.5C14.2856 19.5 16.4817 18.7936 18.5184 17.4005C20.3114 16.1719 22.0177 14.0541 23.25 12C22.0134 9.96422 20.3016 7.84875 18.5072 6.61781ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4986 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4986 12 16.5Z" fill="#fff"/>
                </svg>
                :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.03116 3.0003L3 4.03146L19.9689 21.0004L21.0001 19.9692L4.03116 3.0003Z" fill="#fff"/>
                  <path d="M12.1562 9.00421L14.9955 11.8434C14.956 11.1032 14.6442 10.4037 14.1201 9.8796C13.5959 9.35545 12.8965 9.04365 12.1562 9.00421Z" fill="#fff"/>
                  <path d="M11.8431 14.9958L9.00391 12.1566C9.04335 12.8968 9.35514 13.5962 9.87929 14.1204C10.4034 14.6445 11.1029 14.9563 11.8431 14.9958Z" fill="#fff"/>
                  <path d="M12 16.5C11.3077 16.5 10.6248 16.3403 10.0043 16.0334C9.38376 15.7264 8.84246 15.2803 8.42248 14.73C8.00249 14.1797 7.71514 13.5398 7.58278 12.8603C7.45043 12.1808 7.47664 11.4799 7.65937 10.8122L4.42172 7.57407C3.09938 8.78532 1.83938 10.3659 0.75 12C1.98844 14.0625 3.6825 16.1831 5.44687 17.3991C7.47094 18.7931 9.67172 19.5 11.9887 19.5C13.255 19.5009 14.5117 19.282 15.7031 18.8531L13.1902 16.3406C12.8024 16.4468 12.4021 16.5004 12 16.5Z" fill="#fff"/>
                  <path d="M11.9996 7.5C12.6919 7.49997 13.3749 7.65966 13.9954 7.96665C14.6158 8.27365 15.1571 8.71966 15.5771 9.27C15.9971 9.82034 16.2845 10.4602 16.4168 11.1397C16.5492 11.8192 16.523 12.5201 16.3402 13.1878L19.6524 16.5C21.0188 15.2695 22.2807 13.6144 23.2496 12C22.013 9.96422 20.3012 7.84875 18.5068 6.61781C16.4574 5.2125 14.2641 4.5 11.9884 4.5C10.7361 4.5018 9.49429 4.72869 8.32227 5.16984L10.8118 7.65937C11.1988 7.55344 11.5983 7.49984 11.9996 7.5Z" fill="#fff"/>
                </svg>
              }
            </button>
          </div>
          <p></p>

          <button
            onClick={handleClickButtonSubmit}
            className={styles.buttonSubmit}
            type='button'
          >Войти</button>
        </form>
      </div>
    </>
  )
}