import styles from './styles.module.css'

interface Props {
  text: string
}

export default function Button({ text }: Props) {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>{text}</button>
    </div>
  )
}