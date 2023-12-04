import { type ChangeEvent, type MouseEvent, useState } from 'react'
import styles from './styles.module.css'

export default function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername (e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
  }

  function handlePassword (e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleSubmit (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    e.preventDefault()
    // Falta relacionar con los end points
  }

  return (
    <div>
      <h1>♾️ LOGIN ♾️</h1>
      <form className={styles.form}>
        <label>Username</label>
        <input type="text" className="username" value={username} onChange={(e) => { handleUsername(e) }} required/>
        <label>Password</label>
        <input type="password" className="password" value={password} onChange={(e) => { handlePassword(e) }} required/>
        <button type="submit" className={styles.button} onClick={(e) => { handleSubmit(e) }}>LOGIN</button>
      </form>
    </div>
  )
}
