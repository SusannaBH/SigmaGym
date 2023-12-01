import LoginForm from './LoginForm'
import ButtonsInicio from './ButtonsInicio'
import styles from './styles.module.css'

export default function Login() {
  return (
    <div className={styles.Login}>
        <LoginForm/>
        <ButtonsInicio textButton="Forget Password" />
        <ButtonsInicio textButton="New Registration" />
    </div>
  )
}
