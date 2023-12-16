import { LoginForm, ButtonsInicio } from './index'
import styles from './styles.module.css'
import { Link as RRLink } from 'react-router-dom'

export default function Login () {
  return (
    <div className={styles.Login}>
      <LoginForm />
      <RRLink to={''} style={{ textDecoration: 'none' }}><ButtonsInicio text="Olvide mi contraseña"/></RRLink>
      <RRLink to={'/registration'} style={{ textDecoration: 'none' }}><ButtonsInicio text="Nuevo usuario"/></RRLink>
    </div>
  )
}
