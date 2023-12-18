// type Props = {}

// export default function DataProfile({}: Props) {
//   return (
//     <div>
//         <h2>PERFIL DE USUARIO</h2>

//     </div>
//   )
// }

import React, { useState, useEffect } from "react";

const DataProfile: React.FC = () => {
  const [datosUsuario, setDatosUsuario] = useState({
    id: "",
    name: "",
    surname: "",
    username: "",
    address: "",
    type: 1,
    gender: "",
    email: "",
    jobTitleWorker: "",
    phoneNum: "",
    birthday: "",
    url_img: "",
  });

  useEffect(() => {
    // Simulación de carga de datos iniciales del usuario
    cargarDatosIniciales();
  }, []);

  const cargarDatosIniciales = () => {
    var requestOptions: RequestInit = {
      method: 'GET',
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/users/1", requestOptions)
      .then(response => response.text())
      .then(result => {
        
      })
      .catch(error => console.log('error', error));
    // Aquí debemos llamar a la API traer la data del JSON y presentarla en cada uno de los campos correspondiente
    setDatosUsuario({
      id: "",
      name: "David",
      surname: "Bernal",
      username: "davidbernal",
      address: "123 Main St",
      type: 1,
      gender: "Male",
      email: "davidbernal@example.com",
      jobTitleWorker: "Manager",
      phoneNum: "555-1234",
      birthday: "1990-01-15",
      url_img: "http://example.com/johndoe.jpg",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosUsuario((prevDatosUsuario) => ({
      ...prevDatosUsuario,
      [name]: value,
    }));
  };

  const actualizarUsuario = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(datosUsuario),
      redirect: "follow",
    };

    // Reemplaza la URL con la correcta para tu backend y el ID del usuario
    fetch("http://localhost:8080/users/1", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form>
        {Object.entries(datosUsuario).map(([key, value]) => (
          <div key={key}>
            <label>{key}:</label>
            <input type="text" name={key} value={value} onChange={handleInputChange}/>
          </div>
        ))}
        <button type="button" onClick={actualizarUsuario}>Actualizar datos usuario</button>
      </form>
    </div>
  );
};

export default DataProfile;
