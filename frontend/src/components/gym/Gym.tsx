import { useState } from 'react';
import { InfoGym } from './index.tsx'
import Style from './styles.module.css'

interface Props {
  name?: string;
  horary?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export default function Gym({ name, address, phone, email, horary }: Props) {

  const [gymInfo, setGymInfo] = useState(false);

  const handleButtonClick = () => {
    setGymInfo(!gymInfo); //Mostrar y ocultar la info
  };

  return (
    <div className={Style.gym}>
      <h1 className={Style.name}>--- {name} ---</h1>
      <h6 className={Style.horary}>HORARIO =={'>'} {horary}</h6>
      <button onClick={handleButtonClick} className={Style.buttonInfo}>⬇️ Más información ⬇️</button>
      {
        gymInfo && <InfoGym address={address} phone={phone} email={email} />
      }
    </div>
  );
}