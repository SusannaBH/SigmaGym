import { DataProfile, DeleteProfile, UpdateProfile } from './index'
import Style from './styles.module.css'

type Props = {}

export default function HomeProfile({}: Props) {
  return (
    <div className={Style.structure}>
        <h2 className={Style.title} >Editar Usuario</h2>
        <DataProfile />
        <UpdateProfile />
        <DeleteProfile />
    </div>
  )
}