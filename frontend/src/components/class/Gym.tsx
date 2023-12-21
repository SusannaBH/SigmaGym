import { ButtonClass } from './index';
import Styles from './styles.module.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    <>
      <h2>{nameGym}</h2>
      <div className={Styles.flex}>
        {clases.map((clase) => {
          const { id, coach, horary, sport, max_students, numStudentsOnClass, lista_usuarios_por_clase } = clase;
          const userIsInClass = lista_usuarios_por_clase.findIndex((user) => user.id === userIDparsed) > -1 ? true : false
          return (
            <>
              <Box sx={{ minWidth: 'fit-content' }} className={Styles.classBox}>
                <Card sx={{ bgcolor: 'aquamarine' }} variant="outlined">
                  <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                      {sport}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {coach}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {horary}
                    </Typography>
                    <Typography variant="body2">
                      <div>{'==>'} Quedan {max_students - numStudentsOnClass} plazas en esta clase.</div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonClass classId={id} userIsInClass={userIsInClass} />
                  </CardActions>
                </Card>
              </Box>
            </>
          )
        })}
      </div>
    </>
  )
}
