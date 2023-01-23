import { Link } from "react-router-dom"
import React from "react";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Libros">Servicios</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
