import AuthService from '../services/AuthService';
import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <h1>~ LOGIN ~</h1>
      <form>
        <label>Username:<input type="text" className="username"/></label>
        <label>Password:<input type="password" className="password"/></label>
        <button type="submit" className="login">LOGIN</button>
      </form>
      <div className='buttons'>
        <button>Forget Password</button>
        <button>New Registration</button>
      </div>
    </div>
  )
}



