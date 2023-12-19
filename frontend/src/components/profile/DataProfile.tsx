import React, { useState, useEffect } from "react";

interface User {
  id:               number;
  name:             string;
  surname:          string;
  username:         string;
  password:         string;
  address:          string;
  status:           boolean;
  gender:           string;
  email:            string;
  dni:              string;
  job_title_worker: string;
  phone_num:        string;
  credit_card:      string;
  birthday:         string;
  url_img:          string;
}

const DataProfile: React.FC = () => {
  const [datosUsuario, setDatosUsuario] = useState({
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

  const userId = localStorage.userId;

  useEffect(() => { cargarDatosIniciales() }, []);

  const cargarDatosIniciales = () => {
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:8080/users/${userId}`, requestOptions)
    .then(response => response.json() as Promise<User>)
      .then(result => {
        setDatosUsuario({
          Nombre: result.name,
          Apellidos: result.surname,
          Usuario: result.username,
          Direccion: result.address,
          Genero: result.gender,
          Email: result.email,
          Puesto_trabajo: result.job_title_worker,
          Telefono: result.phone_num,
          Fecha_Nacimiento: result.birthday,
          Imagen: result.url_img,
        });
      })
      .catch(error => console.log('error', error));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosUsuario((prevDatosUsuario) => ({
      ...prevDatosUsuario,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        {Object.entries(datosUsuario).map(([key, value]) => (
          <div key={key}>
            <label>{key}:  </label>
            <input type="text" name={key} value={value} onChange={handleInputChange} style={{ maxWidth: 300 }}/>
          </div>
        ))}
        
      </form>
    </div>
  );
};

export default DataProfile;
