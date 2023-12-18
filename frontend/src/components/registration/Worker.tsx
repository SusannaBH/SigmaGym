
import Style from './styles.module.css'

export default function Worker() {

  return (
    <div className={Style.worker}>
        <label htmlFor="opcions">Puesto de trabajo</label>
        <select name="job_title_worker">
          <option value="Technician">Técnico</option>
          <option value="Manager">Manager</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Trainer">Entrenador</option>
          <option value="Coordinator">Cordinador</option>
          <option value="Assistant">Asistente</option>
          <option value="Analyst">Analista</option>
        </select>
    </div>
  )
}