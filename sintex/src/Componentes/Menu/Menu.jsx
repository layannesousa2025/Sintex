import MenuLink from "../MenuLink/MenuLink";
import "./Menu.css"
export default function Menu() {
  return (
    <nav className="Menu">
      <MenuLink to="/">
        Home
      </MenuLink>

      <MenuLink to="/about">
        About
      </MenuLink>

      <MenuLink to="/admin">
        Administrador
      </MenuLink>

      <MenuLink to="/client">
        Cliente
      </MenuLink>
    </nav>
  )
}