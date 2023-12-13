
import Style from './styles.module.css'

interface IWorker{
  handleJob: (job: string) => void
}

export default function Worker({ handleJob }: IWorker) {

  return (
    <div className={Style.worker}>
        <label htmlFor="opcions">Puesto de trabajo</label>
        <select onChange={(e) => handleJob(e.target.value)}>
          <option value="technician">Técnico</option>
          <option value="manager">Manager</option>
          <option value="supervisor">Supervisor</option>
          <option value="trainer">Entrenador</option>
          <option value="coordinator">Cordinador</option>
          <option value="assistant">Asistente</option>
          <option value="analyst">Analista</option>
        </select>
    </div>
  )
}