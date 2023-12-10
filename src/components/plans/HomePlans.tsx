import { Plan } from "./index";
import Style from './styles.module.css'
import dataPlans from "../../data/planes/plans.json"

export default function HomePlans() {
  return (
    <div className={Style.estructure}>
      {dataPlans.planes.map((plan) => {
        const {id, title, info, price, image} = plan
        return (
          <Plan key={id} title={title} info={info} price={Number(price)} imageSrc={image} />
        )
      })}
    </div>
  )
}