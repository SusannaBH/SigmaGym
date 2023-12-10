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
      {/*<div className={Style.container}>
        <h1 className={Style.title}>PREMIUM</h1>
        <h2 className={Style.price}>100€</h2>
      </div>
      <Image imageSrc={imageSrc} />
      <p className={Style.information}>¡Con este plan pagarás una vez y no más!
        Es el ideal para las personas que no les
        gusta estar pendientes de la renovación
        de pago.</p>
      <button className={Style.buttonChange}>CAMBIAR DE PLAN</button>*/}
    </div>
  )
}