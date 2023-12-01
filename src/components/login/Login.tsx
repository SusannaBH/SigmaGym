import LoginForm from './LoginForm'
import ButtonsInicio from './ButtonsInicio'

export default function Login() {
  return (
    <div className='login'>
        <LoginForm/>
        <ButtonsInicio textButton="Forget Password" />
        <ButtonsInicio textButton="New Registration" />
    </div>
  )
}
