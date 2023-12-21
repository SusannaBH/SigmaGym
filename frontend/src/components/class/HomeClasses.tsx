import Styles from './styles.module.css'
import ListGyms from './ListGyms'

export default function HomeClasses() {

  return (
    <div>
      <h1 className={Styles.titlePage}>- CLASES -</h1>
      <ListGyms />
    </div>
  )
}