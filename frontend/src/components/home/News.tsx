import { New } from "./index";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"
import { ENDPOINTS } from "@/constants";

export default function News() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    fetch(ENDPOINTS.NEWS, { method: "GET", redirect: "follow" })
      .then((response) => response.json())
      .then((result) => setDataNews(result))
      .catch((error) => console.log("Error fetching news:", error));
  }, []);

  return (
    <div>
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
