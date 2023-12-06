import { type ChangeEvent, useState } from 'react'
import styles from './styles.module.css'
import { ButtonsInicio } from './index'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleSubmit(e: any) {
    // Falta relacionar con los end points
    e.preventDefault()
  }

  return (
    <div>
      <h1>♾️ LOGIN ♾️</h1>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input name="username" type="text" className="username" value={username} onChange={(e) => { handleUsername(e) }} required />
        <label>Password</label>
        <input name="password" type="password" className="password" value={password} onChange={(e) => { handlePassword(e) }} required />
        <ButtonsInicio text={'LOGIN'} type="submit"></ButtonsInicio>
      </form>
    </div>
  )
}
