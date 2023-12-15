import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/componentsGeneric/PrivateRoute";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Plans from "./pages/Plans";
import Gyms from "./pages/Gyms";
import NotFound from "./pages/NotFound";


const App: React.FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Layout />} />}>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/plans" element={<PrivateRoute element={<Plans />} />} />
        <Route path="/gyms" element={<PrivateRoute element={<Gyms />} />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
