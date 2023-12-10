import Style from './styles.module.css'

interface Props {
  imageSrc?: string
}

export default function Image({imageSrc} : Props) {
  return (
    <img src={imageSrc} alt="inicio" className={Style.image} />
  )
}
