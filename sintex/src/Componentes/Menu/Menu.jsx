import MenuLink from "../MenuLink/MenuLink";

export default function Menu() {
return ( 
    <nav>
        <MenuLink to="/">
        Home
        </MenuLink>

        <MenuLink to="/about">
        About
        </MenuLink>
    </nav>
)
}