import Style from './styles.module.css'
import { Image } from './index'

interface Props {
  title?: string
  price?: number
  info?: string
  imageSrc?: string
}

export default function Plan({ title, price, info, imageSrc }: Props) {

  return (
    <div className={Style.card}>
      <div className={Style.container}>
        <h1 className={Style.title}>{title}</h1>
        <h4 className={Style.price}>{price}€</h4>
      </div>
      <Image imageSrc={imageSrc} />
      <p className={Style.information}>{info}</p>
      <button className={Style.buttonChange}>CAMBIAR DE PLAN</button>
    </div>
  )
}