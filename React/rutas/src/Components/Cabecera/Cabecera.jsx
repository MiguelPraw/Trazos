import { NavLink } from "react-router-dom";

const Cabecera = ({}) => {
    return (
        <header className="Cabecera">
            <ul>
                <li> <NavLink to="/">Inicio</NavLink> </li>
                <li> <NavLink to="/trabajos">Trabajos</NavLink> </li>
                <li> <NavLink to="/trabajos/web">Trabajos de web</NavLink> </li>
            </ul>
        </header>
    )
}

export default Cabecera;