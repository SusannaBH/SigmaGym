
import Login from './Login'
import ImageInicio from './ImageInicio'
import styles from './styles.module.css'

export default function Inicio() {
  
  return (
    <div className={styles.inicio}>
        <ImageInicio />
        <Login />
    </div>
  )
}
