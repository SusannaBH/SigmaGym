import { New } from "./index";
import Styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function HomeNews() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/news", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => setDataNews(result))
      .catch((error) => console.log("Error fetching news:", error));
    }, []); 

    return (
      <div className={Styles.estructure}>
        <h1 className={Styles.title}>- NOVEDADES -</h1>
        {dataNews.map((novedad) => {
          const { id, titulo, gym_name, fecha, informacion } = novedad;
          return (
            <New key={id} title={titulo} gym_name={gym_name} date={fecha} info={informacion}/>
          );
        })}
      </div>
    );
}
