import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Style from './styles.module.css';

interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  address: string;
  status: boolean;
  gender: string;
  email: string;
  dni: string;
  jobTitleWorker: string;
  phoneNum: string;
  credit_card: string;
  birthday: string;
}

interface DataProfileProps {
  datosUsuario: {
    name: string;
    surname: string;
    username: string;
    password: string;
    address: string;
    gender: string;
    email: string;
    jobTitleWorker: string;
    phoneNum: string;
    birthday: string;
  };
  setDatosUsuario: React.Dispatch<React.SetStateAction<{
    name: string;
    surname: string;
    username: string;
    password: string;
    address: string;
    gender: string;
    email: string;
    jobTitleWorker: string;
    phoneNum: string;
    birthday: string;
  }>>;
}

const DataProfile: React.FC<DataProfileProps> = ({ datosUsuario, setDatosUsuario }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosUsuario((prevDatosUsuario) => ({
      ...prevDatosUsuario,
      [name]: value,
    }));
  };

    const traducirClaveAlCastellano = (key: string): string => {
      switch (key) {
        case 'name':
          return 'Nombre';
        case 'surname':
          return 'Apellido';
        case 'username':
          return 'Nombre de usuario';
        case 'password':
          return 'Contraseña';
        case 'address':
          return 'Dirección';
        case 'gender':
          return 'Género';
        case 'email':
          return 'Correo electrónico';
        case 'jobTitleWorker':
          return 'Puesto de trabajo';
        case 'phoneNum':
          return 'Número de teléfono';
        case 'birthday':
          return 'Fecha de nacimiento';
        default:
          return key;
      }
    };

  return (
    <div>
      <form>
        {Object.entries(datosUsuario).map(([key, value]) => (
          <div key={key}>
            <label>{traducirClaveAlCastellano(key)}</label>
            <input type="text" name={key} value={value ?? ""} onChange={handleInputChange} style={{ maxWidth: 300 }} />
          </div>
        ))}
      </form>
    </div>
  );
};

const UserProfile: React.FC = () => {
  const userId = localStorage.userId;
  const [datosUsuario, setDatosUsuario] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    address: "",
    gender: "",
    email: "",
    jobTitleWorker: "",
    phoneNum: "",
    birthday: ""
  });

  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  const cargarDatosIniciales = () => {
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:8080/users/${userId}`, requestOptions)
      .then(response => response.json() as Promise<User>)
      .then(result => {
        setDatosUsuario({
          name: result.name,
          surname: result.surname,
          username: result.username,
          password: result.password,
          address: result.address,
          gender: result.gender,
          email: result.email,
          jobTitleWorker: result.jobTitleWorker,
          phoneNum: result.phoneNum,
          birthday: result.birthday
        });
      })
      .catch(error => console.log('error', error));
  };

  const updateUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(datosUsuario),
      redirect: "follow",
    };

    fetch(`http://localhost:8080/users/${userId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result) {
          toast.success("Datos modificados correctamente!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false,
            closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"
          });
        } else {
          toast.error("Datos no modificados!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false,
            closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <DataProfile datosUsuario={datosUsuario} setDatosUsuario={setDatosUsuario} />
      <button className={Style.buttonUpdate} type="button" onClick={updateUser}> Enviar datos actualizados </button>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
