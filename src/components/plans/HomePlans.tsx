import { Plan } from "./index";
import Style from './styles.module.css'
import { useEffect, useState } from 'react';

export default function HomePlans() {
  const [dataPlans, setDataPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/plans", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json()) // Cambiado a json() para parsear el resultado como JSON
      .then(result => setDataPlans(result))
      .catch(error => console.error('Error fetching plans:', error));
  }, []); // El segundo argumento del useEffect como un array vacío para ejecutar la solicitud solo una vez al montar el componente

  return (
    <div className={Style.estructure}>
      {dataPlans.map((plan) => {
        const { id, title, info, price, image } = plan;
        return (
          <Plan key={id} title={title} info={info} price={Number(price)} imageSrc={image} />
        );
      })}
    </div>
  );
}