import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/componentsGeneric/PrivateRoute";
import Layout from "./Layout";
import { Login, Registration, Home, Plans, Gyms, NotFound, Contact } from "./pages/index";


const App: React.FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Layout />} />}>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/plans" element={<PrivateRoute element={<Plans />} />} />
        <Route path="/gyms" element={<PrivateRoute element={<Gyms />} />} />
        <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
