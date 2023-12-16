import { Plan } from "./index";
import Style from './styles.module.css'
import { useEffect, useState } from 'react';
import { PlansImages, ENDPOINTS } from "@/constants";

interface dataPlan {
  id: number
  title: string
  info: string
  price: number
}

export default function HomePlans() {
  const [dataPlans, setDataPlans] = useState<dataPlan[]>([]);

  useEffect(() => {
    fetch(ENDPOINTS.PLANS, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json()) // Cambiado a json() para parsear el resultado como JSON
      .then(result => setDataPlans(result))
      .catch(error => console.error('Error fetching plans:', error));
  }, []); // El segundo argumento del useEffect como un array vacío para ejecutar la solicitud solo una vez al montar el componente

  return (
    <div className={Style.structure}>
      {dataPlans.map((plan) => {
        const { id, title, info, price } = plan;
        const image: string = PlansImages[title.toUpperCase() as keyof typeof PlansImages]
        return (
          <Plan key={id} title={title} info={info} price={Number(price)} imageSrc={image} />
        );
      })}
    </div>
  );
}