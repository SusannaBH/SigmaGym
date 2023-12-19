import { useEffect, useState } from "react";

function Classes() {
    //! Interfaces
    interface Classes {
        id: number;
        name: string;
        address: string;
        phone: string;
        email: string;
        horary: string;
        lista_classes_usuario: ListaClassesUsuario[];
    }

    interface ListaClassesUsuario {
        id: number;
        coach: string;
        horary: string;
        sport: string;
        num_students_on_class: number;
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
        gender: Gender;
        email: string;
        dni: string;
        job_title_worker: null | string;
        phone_num: string;
        credit_card: string;
        birthday: Date;
        url_img: string;
    }

    enum Gender {
        Female = "Female",
        Male = "Male",
    }

    //! Fetching data
    const [classes, setClasses] = useState<Classes[]>([]);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = () => {

        var requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow",
        };

        fetch("http://localhost:8080/gyms", requestOptions)
            .then((response) => response.json())
            .then((result: Classes[]) => {
                setClasses(result);
            })
            .catch((error) => console.log("error", error));
    };

    return <>
        <select name="lenguajes" id="lang">
            <option value="selecciona">Selecciona un gimnasio</option>
            {classes.map((gym) => (
                <option value={gym.name} key={gym.id}> <h2>{gym.name}</h2></option>
            ))}
        </select>
    </>
}

export default Classes;
