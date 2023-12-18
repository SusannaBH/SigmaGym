import { useState, type FormEvent } from 'react';
import Style from './styles.module.css'
import { Worker, BottonsInicio } from './index'
import { useNavigate } from "react-router-dom";
import { ENDPOINTS, USERS_TITLES } from '../../constants'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RegistrerForm() {

  const [selectOptions, setOptions] = useState<USERS_TITLES>(USERS_TITLES.Client)
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dniError, setDNIError] = useState('');
  const [status, setStatus] = useState(true);

  function handleOptions(e: any) {
    setOptions(e.target.value)
  }

  //Validar formato email
  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //Validar formato DNI
  function validateDNI(dni: string): boolean {
    const dniRegex = /^\d{8}[A-Za-z]$/;
    return dniRegex.test(dni);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement> | undefined) {
    e?.preventDefault()
    const formData = new FormData(e?.currentTarget)
    const dataToSend: Record<string, string> = {}

    //Validar contraseñas
    if (password !== repeatPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }
    //Limpiar mensajes de error
    setPasswordError('');
    //Validar formato email
    const email = formData.get('email') as string;
    if (!validateEmail(email)) {
      setEmailError('Formato de email incorrecto');
      return;
    } else {
      setEmailError('');
    }
    //Validar formato DNI
    const dni = formData.get('dni') as string;
    if (!validateDNI(dni)) {
      setDNIError('Formato de DNI incorrecto');
      return;
    } else {
      setDNIError('');
    }

    for (const [key, value] of formData.entries()) {
      dataToSend[key] = value.toString()
    }

    // FETCH PARA ENVIAR DATOS CUANDO CLIQUEMOS EN ENVIAR
    fetch(ENDPOINTS.USERS, {
      method: 'POST', headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(dataToSend), redirect: 'follow'
    })
      .then(response => response.text())
      .then((result) => {
        if (result) {
          localStorage.user = formData.get("username");
          toast.success("Usuario registrado correctamente!", {
            position: "top-center", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
          });
          setTimeout(function () { navigate("/home"); }, 2100);
        }
      })
      .catch(error => toast.error(error, {
        position: "top-center", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"
      }));
  }

  return (
    <div className={Style.containerReg}>
      <h1>- REGISTRO -</h1>
      <form className={Style.formReg} onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" style={{ maxWidth: 200 }} required />
        {
          emailError && <label style={{ color: 'red' }}>{emailError}</label>
        }
        <label>Nombre</label>
        <input type="text" name="name" style={{ maxWidth: 200 }} required />
        <label>Apellidos</label>
        <input type="text" name="surname" style={{ maxWidth: 200 }} />
        <label>Usuario</label>
        <input type="text" name="username" style={{ maxWidth: 200 }} required />
        <label>Contraseña</label>
        <input type="password" name="password" style={{ maxWidth: 200 }} value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label>Repetir Contraseña</label>
        <input type="password" style={{ maxWidth: 200 }} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
        {
          passwordError && <label style={{ color: 'red' }}>{passwordError}</label>
        }
        <label>Dirección</label>
        <input type="text" name="address" style={{ maxWidth: 200 }} />
        <label>Género</label>
        <div className={Style.gender}>
          <label>M</label>
          <input type="radio" name="gender" value="male" />
          <label className={Style.female}>F</label>
          <input type="radio" name="gender" value="female" />
        </div>
        <label htmlFor="opcions">Tipo Usuario</label>
        <select name="type" onChange={(e) => handleOptions(e)}>
          <option value={USERS_TITLES.Client}>Cliente</option>
          <option value={USERS_TITLES.Worker}>Trabajador</option>
        </select>
        {
          selectOptions == (USERS_TITLES.Worker) ? <Worker /> : null
        }
        <label>Fecha de Nacimiento</label>
        <input type="date" name="birthday" style={{ maxWidth: 200 }} required />
        <label>DNI</label>
        <input type="text" name="dni" style={{ maxWidth: 200 }} required />
        {
          dniError && <label style={{ color: 'red' }}>{dniError}</label>
        }
        <label>Número de teléfono</label>
        <input type="text" name="phone_num" style={{ maxWidth: 200 }} required />
        <BottonsInicio text='ENVIAR'></BottonsInicio>
        <ToastContainer />
      </form>
    </div>
  );
}
