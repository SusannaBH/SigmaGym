import { Login, ImageInicio } from './index'
import styles from './styles.module.css'

export default function Inicio () {
  return (
    <div className={styles.inicio}>
      <div className={styles.imageContainer}><ImageInicio /></div>
      <Login />
    </div>
  )
}
