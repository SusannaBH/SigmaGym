import { useEffect, useState } from "react";
import { GymsContainer } from "./index";

interface User {
    id: number;
    name: string;
    surname: string;
    username: string;
    address: string;
    type: number;
    status: boolean;
    gender: string;
    email: string;
    jobTitleWorker: string;
    phoneNum: string;
    birthday: Date;
    url_img: string;
    lista_Gyms: Gym[];
    plan: Plan;
    lista_classes: any[];
}

interface Gym {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    horary: string;
    lista_classes_gym: ListaClassesGym[];
}

interface ListaClassesGym {
    id: number;
    coach: string;
    horary: string;
    sport: string;
    max_students: number;
    lista_usuarios_por_clase: ListaUsuariosPorClase[];
    numStudentsOnClass: number;
}

interface ListaUsuariosPorClase {
    id: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    address: string;
    type: number;
    status: boolean;
    gender: string;
    email: string;
    dni: string;
    job_title_worker: string;
    phone_num: string;
    credit_card: string;
    birthday: Date;
    url_img: string;
}

interface Plan { }

function ListGyms() {
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem("userId");
                const response = await fetch("http://localhost:8080/users/" + userId);
                const result: User = await response.json();
                setUserData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!userData) {
        return <p>No se encontraron datos.</p>;
    }

    return <GymsContainer data={userData} />
}

export default ListGyms;