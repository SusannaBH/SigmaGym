import { Navigate } from 'react-router-dom'
import { isAuthenticated } from "../../services/isUserAuth";

export const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => (
    isAuthenticated() ? <>{element}</> : <Navigate to="/login" />
);