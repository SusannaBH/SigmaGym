import styles from './styles.module.css'

interface MyComponentProps {
  textButton: string;
}

export default function ButtonsInicio(props: MyComponentProps) {
  return (
    <div className={styles.buttons}>
    <button className={styles.button}>{props.textButton}</button>
  </div>
  )
}



