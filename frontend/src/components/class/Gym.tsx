import { ButtonClass } from './index';
import Styles from './styles.module.css'

interface ListaClassesGym {
  id: number;
  coach: string;
  horary: string;
  sport: string;
  max_students: number;
  lista_usuarios_por_clase: ListaUsuariosPorClase[];
  numStudentsOnClass: number;
}

interface ListaUsuariosPorClase {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  address: string;
  type: number;
  status: boolean;
  gender: string;
  email: string;
  dni: string;
  job_title_worker: string;
  phone_num: string;
  credit_card: string;
  birthday: Date;
  url_img: string;
}

type Props = {
  nameGym: string
  clases: ListaClassesGym[]
}

export default function Gym({ nameGym, clases }: Props) {
  const userID = localStorage.getItem("userId")
  const userIDparsed = userID !== null && Number(localStorage.getItem("userId"))

  return (
    <div>
      <h2>{nameGym}</h2>
      {
        clases.map((clase) => {
          const { id, coach, horary, sport, max_students, numStudentsOnClass, lista_usuarios_por_clase } = clase;
          const userIsInClass = lista_usuarios_por_clase.findIndex((user) => user.id === userIDparsed) > -1 ? true : false
          return (
            <div key={id} className={Styles.containerClass}>
              <div>COACH: {coach}</div>
              <div>HORARIO: {horary}</div>
              <div>DEPORTE: {sport}</div>
              <div>{'==>'} Quedan {max_students - numStudentsOnClass} plazas en esta clase.</div>
              <ButtonClass classId={id} userIsInClass={userIsInClass} />
            </div>
          )
        })
      }
    </div>
  )
}