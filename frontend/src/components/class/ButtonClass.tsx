import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Styles from "@/components/class/styles.module.css"

interface Props {
  classId: number
  userIsInClass: boolean
}

export default function ButtonClass({ classId, userIsInClass }: Props) {

  const [text, setText] = useState(userIsInClass ? "Cancelarse de la clase" : "Registrarme en la clase")
  const [methodRequest, setMethodRequest] = useState(userIsInClass ? 'DELETE' : 'POST')

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate()

  const subscribeToClass = () => {

    let requestOptions: RequestInit = {
      method: methodRequest,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/classes/UserIntoClass/" + userId + "/" + classId, requestOptions)
      .then(response => response.text())
      .then(result => {
        if (methodRequest === "DELETE") {
          setText("Registrarme en la clase")
          setMethodRequest("POST")
        } else {
          setText("Cancelarse de la clase")
          setMethodRequest("DELETE")
        }
        toast.info(result, {
          position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
          pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
        })
        setTimeout(function () { navigate(0); }, 2000);
      })
      .catch(error => console.log('error', error));

  }

  return (
    <div>
      <button className={Styles.buttonSubscribeClass} type="button" onClick={subscribeToClass}>{text}</button>
      <ToastContainer />
    </div>
  )
}