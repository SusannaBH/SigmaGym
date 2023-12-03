import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"

function Layout() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
export default Layout