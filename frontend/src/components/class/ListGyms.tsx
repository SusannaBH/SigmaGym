import { useEffect, useState } from "react";

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
    lista_Gyms: ListaGym[];
    plan: Plan;
    lista_classes: any[];
}

interface ListaGym {
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
    const [data, setData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedValue, setSelectedValue] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem("userId"); // LLamar a la 🍪 del userId
                const response = await fetch("http://localhost:8080/users/" + userId);
                const result: User = await response.json(); // Asumo que la respuesta es JSON, ajusta según tus necesidades
                setData(result);
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

    if (!data) {
        return <p>No se encontraron datos.</p>;
    }

    // console.log(data); // Verify if the data exists

    const setGymId = (value: any) => {
        setSelectedValue(value);
    };

    function CardComponent({ data, value }: { data: User, value: number }) {
        const gimnasio = data.lista_Gyms[value - 1];
        // console.log(gimnasio);
        const listasDeClases = gimnasio.lista_classes_gym;
        const [prevState, setPrevState] = useState(null);
        const userId = localStorage.getItem("userId"); // LLamar a la 🍪 del userId
        const userIdInteger = userId != null ? parseInt(userId, 10) : 0;
        // console.log(listasDeClases);

        const [isUserInscribed, setIsUserInscribed] = useState(false);
        const handleButtonClick = (classId: any, test: any) => {
            setIsUserInscribed(prevState => !prevState);

            if (test) {
                alert("inscribir")
                const userId = localStorage.getItem("userId"); // LLamar a la 🍪 del userId
                var requestOptions: RequestInit = {
                    method: 'POST',
                    redirect: 'follow'
                };

                fetch("http://localhost:8080/UserIntoClass/" + userId + "/" + classId, requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));

            } else {
                alert("borrar")
            }
            // location.reload();
            // Lógica para inscribir o desinscribir al usuario según sea necesario
            // Aquí puedes manejar la lógica para cambiar el estado de inscripción
            // o realizar otras acciones relacionadas con la inscripción/desinscripción.
        };
        return (
            <>
                <h1>{gimnasio?.name}</h1>
                {gimnasio?.lista_classes_gym.map((gymClass) => (
                    <div key={gymClass.id}>
                        <div>HORARIO: {gymClass.horary}</div>
                        <div>COACH: {gymClass.coach}</div>
                        <div>DEPORTE: {gymClass.sport}</div>

                        <button onClick={() => handleButtonClick(gymClass.id, Object.values(gymClass.lista_usuarios_por_clase).some(item => item.id === userIdInteger))}>
                            {Object.values(gymClass.lista_usuarios_por_clase).some(item => item.id === userIdInteger) ? "Desinscribirse" : "Inscribirse"}
                        </button>
                        {/* <button type="button">{
                            //! Faltan dos botones:
                            // BTN TRUE Opcion 1 (desescribirse) -> sería el que llama a la API y borra desinscribe de la clase
                            // BTN FALSE Opcion 2 (inscribirse) -> sería el que inscribe al usuario en la clase
                            Object.values(gymClass.lista_usuarios_por_clase).some(item => item.id === userIdInteger) ? "Desescribirse" : "Inscribirse"
                            
                        }</button> */}
                    </div>
                ))}
            </>
        );
    }

    return (
        <div>
            <select
                defaultValue={0}
                name="gimnasios"
                id="lang"
                onChange={(e) => setGymId(+e.currentTarget.value)}
            >
                <option value={0} disabled>
                    Selecciona un gimnasio
                </option>
                {data.lista_Gyms.map((gym) => (
                    <option value={gym.id} key={gym.id}>
                        {gym.name}
                    </option>
                ))}
            </select>
            {/* Llama a CardComponent y pasa las props */}
            {selectedValue !== 0 && (
                <CardComponent data={data} value={selectedValue} />
            )}
        </div>

    );
}

export default ListGyms;