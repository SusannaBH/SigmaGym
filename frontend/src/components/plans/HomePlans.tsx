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
      .then(response => response.json())
      .then(result => setDataPlans(result))
      .catch(error => console.error('Error fetching plans:', error));
  }, []); 

  return (
    <div className={Style.structure}>
      {dataPlans.map((plan) => {
        const { id, title, info, price } = plan;
        const image: string = PlansImages[title.toUpperCase() as keyof typeof PlansImages]

        const planId = localStorage.getItem("planId") || null

        const textoBtn = Number(planId) === id ? "TU PLAN" : "CAMBIAR DE PLAN"
        return (
          <Plan key={id} idPlan={id} title={title} info={info} price={Number(price)} imageSrc={image} textoBtn={textoBtn} />
        );
      })}
    </div>
  );
}