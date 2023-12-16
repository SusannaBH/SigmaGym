import Styles from './stylesNotFound.module.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={Styles.container}>
      <h1>404 - Not Found</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/login">
        <button className={Styles.buttonInicio}>Ir a "Iniciar Sesión"</button>
      </Link>
    </div>
  );
};

export default NotFound;