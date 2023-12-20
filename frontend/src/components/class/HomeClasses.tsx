import Styles from './styles.module.css'
import ListGyms from './ListGyms'
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '@/constants';

  interface Class {
    id: number;
    coach: string;
    horary: string;
    sport: string;
    num_students_on_class: number;
    max_students: number;
    lista_usuarios: User[];
    numStudentsOnClass: number;
}

interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  address: string;
  type: number;
  status: boolean;
  gender: "Male" | "Female";
  email: string;
  dni: string;
  job_title_worker: null | string;
  phone_num: string;
  credit_card: string;
  birthday: Date;
  url_img: string;
}

export default function HomeClasses() {
  const [gym_id, setGymId] = useState<null | number>(null);
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    fetchClasses()
  }, [])

  const fetchClasses = () =>{
    fetch(ENDPOINTS.CLASSES, {method: "GET",redirect: "follow"})
        .then((response) => response.json())
        .then((result: Class[]) => {
          setClasses(result)
        })
        .catch((error) => console.log("error", error))
  }

  const handleGymId = (gym_id: number) => {
    setGymId(gym_id)
  }

  return (
    <div>
      <h1 className={Styles.titlePage}>- CLASES -</h1>
      <ListGyms setGymId={handleGymId}/>
      <div>
        {classes.map((classEl) => {
          return <div key={classEl.id}>
              <p>{classEl.coach}</p>
            </div>
        })}
      </div>
    </div>
  )
}