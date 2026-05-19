import style from "./MenuLink.module.css"
import { Link, useLocation } from "react-router-dom"; 

export default function MenuLink({ to, children }) {
    const localizacao = useLocation(); 
    
    return (
        <Link 
          to={to}
          className={`${localizacao.pathname === to ? style.active : ''}`}
        >
            {children}
        </Link>
    )
} 