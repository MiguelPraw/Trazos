import { NavLink } from "react-router-dom";

const Cabecera = ({}) => {
    return (
        <header className="Cabecera">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/restaurante">Restaurante</NavLink></li>
                <li><NavLink to="/manager">Manager</NavLink></li>
            </ul>
        </header>
    )
}

export default Cabecera;