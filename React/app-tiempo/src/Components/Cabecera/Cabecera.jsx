import { Header , Wrapper , Navegador , Titulo , Menu , Elemento  } from "../../Styled/Components.styled";
import { NavLink } from "react-router-dom";

const Cabecera = () => {
    return (
        <Header>
            <Wrapper>
                <Navegador>
                    <NavLink to="/">
                        <Titulo>El Tiempo</Titulo>
                    </NavLink>
                    <Menu>
                        <NavLink to="/provincias">
                            <Elemento>Provincias</Elemento>
                        </NavLink>
                        <NavLink to="/municipios">
                            <Elemento>Municipios</Elemento>
                        </NavLink>
                    </Menu>
                </Navegador>
            </Wrapper>
        </Header>
    )
}

export default Cabecera;