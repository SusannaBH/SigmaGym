import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Plans from "./pages/Plans";
import Gyms from "./pages/Gyms";

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) => {
  return isAuthenticated ? ( <>{element}</> ) : ( <Navigate to="/login" /> );
};

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('user') != null;
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Layout />} isAuthenticated={isAuthenticated}/>} >
          <Route path="/home" element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated}/>} />
          <Route path="/plans" element={<PrivateRoute element={<Plans />} isAuthenticated={isAuthenticated}/>} />
          <Route path="/gyms" element={<PrivateRoute element={<Gyms />} isAuthenticated={isAuthenticated}/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
