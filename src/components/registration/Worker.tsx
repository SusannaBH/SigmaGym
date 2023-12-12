
interface IWorker{
  handleJob: (job: string) => void
}

export default function Worker({handleJob}: IWorker) {
  return (
    <div>
        <label>Puesto de trabajo</label>
        <input type="text" style={{ maxWidth: 200 }} onChange={(e) => handleJob(e.target.value)} required />
    </div>
  )
}