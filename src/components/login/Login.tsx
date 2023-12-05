import { LoginForm, ButtonsInicio } from './index'
import styles from './styles.module.css'
import { Link as RRLink } from 'react-router-dom'

export default function Login () {
  return (
    <div className={styles.Login}>
      <LoginForm />
      <RRLink to={''} style={{ textDecoration: 'none' }}><ButtonsInicio text="Forget Password"/></RRLink>
      <RRLink to={'/registration'} style={{ textDecoration: 'none' }}><ButtonsInicio text="New Registration"/></RRLink>
    </div>
  )
}
