import Style from './styles.module.css'

interface Props {
  imageSrc: string | undefined
}

export default function Image({ imageSrc }: Props) {
  return (
    <img src={imageSrc as string} alt="inicio" className={Style.image} />
  )
}
