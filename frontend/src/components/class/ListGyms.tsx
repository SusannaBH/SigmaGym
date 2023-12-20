import { ENDPOINTS } from "@/constants";
import { useEffect, useState } from "react";

//! Interfaces
    interface Gym {
        id: number;
        name: string;
        address: string;
        phone: string;
        email: string;
        horary: string;
        lista_classes: Class[];
    }

    interface Class {
        id: number;
        coach: string;
        horary: string;
        sport: string;
        num_students_on_class: number;
        max_students: number;
        lista_usuarios: User[];
        numStudentsOnClass: number;
    }

    interface User {
        id: number;
        name: string;
        surname: string;
        username: string;
        password: string;
        address: string;
        type: number;
        status: boolean;
        gender: "Male" | "Female";
        email: string;
        dni: string;
        job_title_worker: null | string;
        phone_num: string;
        credit_card: string;
        birthday: Date;
        url_img: string;
    }

interface Props{
    setGymId: (gym: number) => void
}

function ListGyms( { setGymId }: Props ) {
    

    //! Fetching data
    const [gyms, setGyms] = useState<Gym[]>([]);

    useEffect(() => {
        fetchGyms();
    }, []);

    const fetchGyms = () => {

        var requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow",
        };

        fetch(ENDPOINTS.GYMS, requestOptions)
            .then((response) => response.json())
            .then((result: Gym[]) => {
                setGyms(result);
            })
            .catch((error) => console.log("error", error));
    };

    return <>
        <select defaultValue={0} name="gimnasios" id="lang" onChange={(e) => setGymId(+e.currentTarget.value)}>
            <option value={0}  disabled>Selecciona un gimnasio</option>
            {gyms.map((gym) => (
                <option value={gym.id} key={gym.id}>{gym.name}</option>
            ))}
        </select>
    </>
}

export default ListGyms;
