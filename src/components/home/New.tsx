
type Props = {
  title?: string
  date?: Date
  info?: string
}

export default function New ({ title, date, info }: Props) {
  return (
    <div>
      <h4>{title}</h4>
      <h6>{date && date.toLocaleDateString("es-ES")}</h6>
      <p>{info}</p>
    </div>
  )
}