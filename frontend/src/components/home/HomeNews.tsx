import PlanFree from "../componentsGeneric/PlanFree";
import { News} from './index'
import Styles from "./styles.module.css";

type Props = {}

export default function HomeNews({ }: Props) {

  const planId = localStorage.planId;

  return (
    <div>
      <h1 className={Styles.titlePage}>- NOVEDADES -</h1>
      {
        planId == 1 ? <PlanFree/> : <News />
      }
    </div>
  )
}