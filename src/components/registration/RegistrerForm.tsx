import { useState } from 'react';
import styles from './styles.module.css'
import { Customer, Worker, BottonsInicio } from './index'

export default function RegistrerForm() {

  const [selectOptions, setOptions] = useState('customer')
  const [gender, setGender] = useState('')
  const [dni, setDNI] = useState('')
  const [number, setNumber] = useState('')

  function handleOptions(e: any) {
    setOptions(e.target.value)
  }

  function handleGender(gender: string) {
    setGender(gender)
  }

  function handleDNI(dni: string) {
    setDNI(dni)
  }

  function handleNumber(number: string) {
    setNumber(number)
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log({
      [e.target]: e.target,
      gender,
      dni,
      number
    })
  }

  return (
    <div className={styles.containerReg}>
      <h1>- REGISTRO -</h1>
      <form className={styles.formReg} onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input type="email" style={{ maxWidth: 200 }} required />
        <label>Nombre</label>
        <input type="text" style={{ maxWidth: 200 }} required />
        <label>Apellidos</label>
        <input type="text" style={{ maxWidth: 200 }} />
        <label>Usuario</label>
        <input type="text" style={{ maxWidth: 200 }} required />
        <label>Contraseña</label>
        <input type="password" style={{ maxWidth: 200 }} required />
        <label>Repetir Contraseña</label>
        <input type="password" style={{ maxWidth: 200 }} required />
        <label>Fecha de Nacimiento</label>
        <input type="date" style={{ maxWidth: 200 }} required/>
        <label>Dirección</label>
        <input type="text" style={{ maxWidth: 200 }} />
        <label htmlFor="opcions">Tipo Usuario</label>
        <select value={selectOptions} onChange={(e) => handleOptions(e)}>
          <option value="customer">Cliente</option>
          <option value="worker">Trabajador</option>
        </select>
        {
          selectOptions === ("customer") ? <Customer handleGender={handleGender} /> : <Worker handleDNI={handleDNI} handleNumber={handleNumber} />
        }
        <BottonsInicio text='ENVIAR'></BottonsInicio>
      </form>
    </div>
  );
}
