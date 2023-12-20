import Style from './styles.module.css'
import { Image } from './index'
import { ENDPOINTS } from '@/constants'

interface Props {
  idPlan: number
  title: string
  price: number
  info: string
  imageSrc: string | undefined
  textoBtn: string
}

export default function Plan({ idPlan, title, price, info, imageSrc, textoBtn }: Props) {

  function handleButtonUpdate(idPlan: number) {
    // TODO: fetch to update plan (falta el ENDPOINT)
  }

  return (
    <div className={Style.card}>
      <div className={Style.container}>
        <h1 className={Style.title}>{title}</h1>
        <h4 className={Style.price}>{price}€</h4>
      </div>
      <Image imageSrc={imageSrc} />
      <p className={Style.information}>{info}</p>
      <button className={Style.buttonChange} onClick={() => handleButtonUpdate(idPlan)}>{textoBtn}</button>
    </div>
  )
}