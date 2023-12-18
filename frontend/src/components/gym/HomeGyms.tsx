import { useEffect, useState } from "react";
import { Gym } from "./index";
import Style from "./styles.module.css"
import { ENDPOINTS } from "@/constants";
import Grid from "@mui/material/Grid";

type Props = {}

export default function HomeGyms({ }: Props) {
    
    const [dataGyms, setDataGyms] = useState([]);

    useEffect(() => {
    fetch(ENDPOINTS.GYMS, {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.json()) // Cambiado a json() para parsear el resultado como JSON
        .then(result => setDataGyms(result))
        .catch(error => console.error('Error fetching gyms:', error));
    }, []); 

    return (
        <div>
            <h1 className={Style.title}>- GIMNASIOS -</h1>
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }} padding={5}>
                {dataGyms.map((gym) => {
                    const { id, name, address, phone, email, horary } = gym;
                    return (
                        <Grid item xs={12} sm={12} md={6} key={id}>
                            <Gym name={name} address={address} phone={phone} email={email} horary={horary} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    )
}
