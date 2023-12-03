import Foto from "/src/assets/INICIO.jpeg"
import styles from './styles.module.css'

export default function Image() {
  return (
    <div>
      <img src={Foto} alt="inicio" className={styles.imageInicio}/>
    </div>
  )
}
