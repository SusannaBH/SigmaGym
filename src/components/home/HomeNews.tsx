import { New } from "./index";
import Styles from "./styles.module.css"

type Props = {}

export default function HomeNews({ }: Props) {
    return (
        <div>
            <h1 className={Styles.title}>NOVEDADES</h1>
            <New/>
            <New/>
            <New/>
            <New/>
            <New/>
        </div>
    )
}