import { Gym } from "./index";
import Styles from "./styles.module.css"

type Props = {}

export default function HomeGyms({ }: Props) {
    return (
        <div className={Styles.estructure}>
            <h1 className={Styles.title}>- GIMNASIOS -</h1>
            <Gym/>
        </div>
    )
}
