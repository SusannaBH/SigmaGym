import { LoginForm, ButtonsInicio } from "./index"
import styles from './styles.module.css'

export default function Login() {
  return (
    <div className={styles.Login}>
      <LoginForm />
      <ButtonsInicio text="Forget Password" />
      <ButtonsInicio text="New Registration" />
    </div>
  )
}
