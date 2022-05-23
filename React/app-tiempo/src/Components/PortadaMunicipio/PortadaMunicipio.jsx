import { Main , Wrapper , ContainerCiudad , Nombre, Fila , Grados , TextoH3 } from "../../Styled/Components.styled";
import { useFetchCiudad } from "./../../Hooks/useFetch.hook";

const PortadaMunicipio = ({ idProvincia , idMunicipio }) => {
    
    let { data } = useFetchCiudad( idProvincia , idMunicipio );
    if( data !== null) {
        console.log( data );
    }

    return (
        <>
            <Main>
                <Wrapper>
                    <ContainerCiudad>
                        <Nombre size="5em">{ ( data !== null ) ? data.municipio.NOMBRE : <></> }</Nombre>
                        <Fila bg="orange" >
                            <Fila flow="column" align="flex-start">
                                <TextoH3>{ ( data !== null ) ? data.stateSky.description : <></> }</TextoH3>
                                <Fila justify="flex-start">
                                    <Grados size="2em" className="max">{ ( data !== null ) ? data.temperaturas.max : <></> }º</Grados>
                                    <Grados size="2em" className="min">{ ( data !== null ) ? data.temperaturas.min : <></> }º</Grados>
                                </Fila>
                                <Nombre size="5em">{ ( data !== null ) ? data.temperatura_actual : <></> }º</Nombre>
                            </Fila>
                            <Fila>
                                
                            </Fila>
                        </Fila>
                    </ContainerCiudad>
                </Wrapper>
            </Main>
        </>
    )
}

export default PortadaMunicipio;