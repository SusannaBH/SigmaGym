
import { ToastContainer, toast } from 'react-toastify';
import Style from './styles.module.css'
import { useState } from 'react';

type Props = {}

export default function UpdateProfile({ }: Props) {
  const userId = localStorage.userId;

  const datosUsuario = useState({
    Nombre: "",
    Apellidos: "",
    Usuario: "",
    Direccion: "",
    Genero: "",
    Email: "",
    Puesto_trabajo: "",
    Telefono: "",
    Fecha_Nacimiento: "",
    Imagen: "",
  });

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
        // console.log(result);
        if (result) {
          toast.success("Datos modificados correctamente!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
          });
        } else {
          toast.error("Datos no modificados!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button className={Style.buttonUpdate} type="button" onClick={updateUser}>Enviar datos actualizados</button>
      <ToastContainer />
    </div>
  )
}