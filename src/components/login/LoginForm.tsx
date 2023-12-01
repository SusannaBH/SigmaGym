import { ChangeEvent, MouseEvent, useState } from "react"


export default function LoginForm() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleUsername(e: ChangeEvent<HTMLInputElement>){
    setUsername(e.target.value)
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>){
    setPassword(e.target.value)
  }

  function handleSubmit(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>){
    e.preventDefault()
    //Falta relacionar con los end points
    
  }
  
  return (
    <div>
      <form className="formInicio">
        <label>Username:<input type="text" className="username" value={username} onChange={(e) => handleUsername(e)}/></label>
        <label>Password:<input type="password" className="password" value={password} onChange={(e) => handlePassword(e)}/></label>
        <button type="submit" className="submit" onClick={(e) => handleSubmit(e)}>LOGIN</button>
      </form>
    </div>
  )
}



