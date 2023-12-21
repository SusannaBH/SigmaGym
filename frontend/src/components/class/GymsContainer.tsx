import Styles from './styles.module.css'
import { Gym } from "./index";

interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  address: string;
  type: number;
  status: boolean;
  gender: string;
  email: string;
  jobTitleWorker: string;
  phoneNum: string;
  birthday: Date;
  url_img: string;
  lista_Gyms: Gym[];
  plan: Plan;
  lista_classes: any[];
}

interface Gym {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  horary: string;
  lista_classes_gym: ListaClassesGym[];
}

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

interface Plan { }

export default function GymsContainer({ data }: { data: User }) {
  const gyms = data.lista_Gyms;

  return (
    <div className={Styles.gymsContainer}>
      {
        gyms.map((gym) => {
          const { name, lista_classes_gym, id } = gym;
          return <Gym key={id} nameGym={name} clases={lista_classes_gym} />
        })
      }
    </div>
  );
}