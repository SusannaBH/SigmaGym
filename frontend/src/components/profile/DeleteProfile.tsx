import { logOut } from "@/services/localStorage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Style from './styles.module.css'

type Props = {}

export default function DeleteProfile({ }: Props) {

	const navigate = useNavigate();
	const userId = localStorage.userId;

	const handleDeleteUser = () => {
    //Alerta para confirmar el delete
    const isConfirmed = window.confirm("¿Está seguro que quiere ELIMINAR SU CUENTA DE USUARIO?");

    if (isConfirmed) {
      fetch(`http://localhost:8080/users/${userId}`, { method: 'DELETE', redirect: 'follow' })
        .then(response => response.text())
        .then(result => {
          if (result) {
            toast.success("Usuario eliminado correctamente.", {
              position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
              pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
            });
            logOut();
            setTimeout(() => navigate("/login"), 2100);
          } else {
            toast.error("ERROR, usuario NO eliminado!", {
              position: "top-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true,
              pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
            });
          }
        })
        .catch(error => console.log('error', error));
    } else {
      toast.info("USUARIO NO ELIMINADO.", {
				position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true,
				pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
			});
    }
  };

  return (
    <div className={Style.deleteContainer}>
      <button className={Style.buttonDelete} type="button" onClick={handleDeleteUser}>
        DARSE DE BAJA
      </button>
      <ToastContainer />
    </div>
  );
};