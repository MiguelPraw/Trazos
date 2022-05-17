import { Header , Wrapper , Navegador , Titulo , Menu , Elemento } from "../../Styled/Components.styled";

const Cabecera = () => {
    return (
        <Header>
            <Wrapper>
                <Navegador>
                    <Titulo>El Tiempo</Titulo>
                    <Menu>
                        <Elemento>Provincias</Elemento>
                        <Elemento>Municipios</Elemento>
                    </Menu>
                </Navegador>
            </Wrapper>
        </Header>
    )
}

export default Cabecera;