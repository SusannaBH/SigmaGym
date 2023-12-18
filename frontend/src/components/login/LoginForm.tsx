import { type ChangeEvent, useState } from "react";
import Style from "./styles.module.css";
import { ButtonsInicio } from "./index";
import { ENDPOINTS } from "../../constants";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    fetch(`${ENDPOINTS.LOGIN}?username=${username}&password=${password}`, { method: "POST", redirect: "follow" })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result) {
          localStorage.user = username;
          toast.success("Usuario correcto!", {
            position: "top-center", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
          });
          setTimeout(function () { navigate("/home"); }, 2100);
        } else {
          toast.error("Contraseña o usuario incorrecto!", {
            position: "top-center", autoClose: 2500, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
          });
        }
      })
      .catch((error) => console.log("- ERROR -", error));
  }

  return (
    <div>
      <h1>♾️ LOGIN ♾️</h1>
      <form className={Style.form} onSubmit={(e) => handleSubmit(e)}>
        <label>USUARIO</label>
        <input name="username" type="text" className="username" value={username} onChange={(e) => { handleUsername(e); }} required />
        <label>CONTRASEÑA</label>
        <input name="password" type="password" className="password" value={password} onChange={(e) => { handlePassword(e); }} required />
        <ButtonsInicio text={"ENVIAR"} type="submit"></ButtonsInicio>
      </form>
      <ToastContainer />
    </div>
  );
}
