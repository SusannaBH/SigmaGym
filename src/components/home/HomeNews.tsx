import { New } from "./index";
import Styles from "./styles.module.css"
import dataNews from "../../data/news.json"

type Props = {}

export default function HomeNews({ }: Props) {
    return (
        <div className={Styles.estructure}>
            <h1 className={Styles.title}>- NOVEDADES -</h1>
            {dataNews.novedades.map((novedad) => {
                const {id, titulo, gym_name, fecha, informacion } = novedad
                return (
                    <New key={id} title={titulo} gym_name={gym_name} date={fecha} info={informacion} />
                )
            })}
            
        </div>
    )
}
