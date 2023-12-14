import './App.css'
import { Routes, Route } from "react-router-dom"
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Plans from './pages/Plans';
import Gyms from './pages/Gyms'

const App = () => {
  // IMPLEMENTAR AQUÍ LA LOGICA

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/gyms" element={<Gyms />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;