import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Admin from "./Pages/Admin/Admin";
import Menu from "./Componentes/Menu/Menu";
import LayoutMenu from "./Pages/LayoutMenu/LayoutMenu";
import PaginaDeErro from "./PaginaDeErro/paginaderro";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import Login from "./Componentes/Login/Login";

export default function App() {
  return (
    <>
      <Menu />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<LayoutMenu />}>
          <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<PaginaDeErro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </>
  )
}