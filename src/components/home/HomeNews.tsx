import { New } from "./index";
import Styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"

export default function HomeNews() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/news", { method: "GET", redirect: "follow" })
      .then((response) => response.json())
      .then((result) => setDataNews(result))
      .catch((error) => console.log("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h1 className={Styles.titlePage}>- NOVEDADES -</h1>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} padding={5}>
        {dataNews.map((novedad) => {
          const { id, titulo, gym_name, fecha, informacion } = novedad;
          return (
            <Grid item xs={8} sm={4} md={4} key={id}>
              <New title={titulo} gym_name={gym_name} date={fecha} info={informacion} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
