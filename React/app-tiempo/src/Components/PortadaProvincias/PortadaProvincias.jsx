import { NavLink } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch.hook";
import { Main , Wrapper , Nombre , ContainerProvincias , Fila , Provincias , Provincia } from "../../Styled/Components.styled";

const PortadaProvincias = () => {

    const { data } = useFetch("provincias");
    if( data !== null ) {
        console.log( data );
    }

    return (
        <>
            <Main>
                <Wrapper>
                    <ContainerProvincias>
                        <Nombre size="3em">Provincias de España</Nombre>
                        <Provincias>
                            {
                                data !== null && data.provincias.map( prov => {
                                    return (
                                        <NavLink to={`/provincia/${prov.CODPROV}`}>
                                            <Provincia key={ prov.CODPROV }>
                                                <Nombre size="1.2em">{ prov.NOMBRE_PROVINCIA }</Nombre>
                                            </Provincia>
                                        </NavLink>
                                    )
                                })
                            }
                        </Provincias>
                    </ContainerProvincias>
                </Wrapper>
            </Main>
        </>
    )

}

export default PortadaProvincias;