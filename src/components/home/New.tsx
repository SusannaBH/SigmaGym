interface Props {
  title?: string
  gym_name?: string
  date?: string
  info?: string
}

export default function New({ title, gym_name, date, info }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{gym_name}</h3>
      {/*<h6>{date?.toLocaleDateString('es-ES')}</h6>*/}
      <h6>{date}</h6>
      <p>{info}</p>
    </div>
  )
}
