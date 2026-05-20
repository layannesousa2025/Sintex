import { Routes, Route } from "react-router-dom"; // ✨ Corrigido para react-router-dom
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"; // ✨ Adicionado o import que faltava!
import Menu from "./Componentes/Menu/Menu";
import LayoutMenu from "./Pages/LayoutMenu/LayoutMenu";

export default function App() {
  return (
    <>
      
<Menu/>
      <Routes>
        <Route path="/" element={<LayoutMenu />}> 
        <Route index element={<Home />} />
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}