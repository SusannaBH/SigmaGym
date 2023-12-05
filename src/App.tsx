import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './Layout';

const App = () => {
  // IMPLEMENTAR AQUÍ LA LOGICA

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;