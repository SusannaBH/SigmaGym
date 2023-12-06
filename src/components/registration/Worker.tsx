
interface IWorker{
  handleDNI: (dni: string) => void
  handleNumber: (number: string) => void
}

export default function Worker({handleDNI, handleNumber}: IWorker) {
  return (
    <div>
        <label>DNI</label>
        <input type="text" style={{ maxWidth: 200 }} onChange={(e) => handleDNI(e.target.value)} required />
        <label>Number Phone</label>
        <input type="text" style={{ maxWidth: 200 }} onChange={(e) => handleNumber(e.target.value)} required />
    </div>
  )
}