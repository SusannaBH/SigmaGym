import UserProfile from './UserProfile'
import { DeleteProfile, } from './index'
import Style from './styles.module.css'

type Props = {}

export default function HomeProfile({}: Props) {
  return (
    <div>
      <div className={Style.structure1}>
        <h2 className={Style.title} >Editar Usuario</h2>
        <UserProfile />
      </div>
      <div className={Style.structure2}>
        <DeleteProfile />
      </div>
    </div>
  )
}