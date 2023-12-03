import {Login, ImageInicio} from "./index"
import styles from './styles.module.css'

export default function Inicio() {
  
  return (
    <div className={styles.inicio}>
      <div><ImageInicio /></div>
      <div><Login /></div>
    </div>
  )
}
