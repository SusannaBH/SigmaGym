import styles from './stylesButton.module.css'

interface Props {
  text: string
  type?: string
  onClick?: (e: any) => void
}

export default function ButtonsInicio({ text }: Props) {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>{text}</button>
    </div>
  )
}
