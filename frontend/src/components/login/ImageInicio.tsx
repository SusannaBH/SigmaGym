import Foto from '../../assets/INICIO.jpeg'
import styles from './styles.module.css'

export default function Image () {
  return (
    <img src={Foto} alt="inicio" className={styles.imageInicio}/>
  )
}
