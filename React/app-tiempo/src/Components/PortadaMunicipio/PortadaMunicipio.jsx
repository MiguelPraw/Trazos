import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import { MainCiudad , Wrapper , ContainerCiudad , Nombre, Fila , Grados , TextoH3 , ContainerCarga } from "../../Styled/Components.styled";
import { useFetchCiudad } from "./../../Hooks/useFetch.hook";
import SliderPronostico from "../SliderPronostico/SliderPronostico";

const PortadaMunicipio = ({ idProvincia , idMunicipio }) => {
    
    const { data } = useFetchCiudad( idProvincia , idMunicipio );
    // if( data !== null) {
    //     console.log( data );
    // }

    const listaFondos = useContext( GlobalContext );

    const getFondo = ( numero ) => {
        if( numero >= 10 && numero <= 12 ) {
            return listaFondos[0].url;
        } else if ( numero >= 13 && numero <= 14 ) {
            return listaFondos[3].url;
        } else if ( numero >= 15 && numero <= 18 ) {
            return listaFondos[2].url;
        } else if ( numero >= 18 && numero <= 26 ) {
            return listaFondos[1].url;
        } else if ( numero >= 43 && numero <= 64 ) {
            return listaFondos[4].url;
        }
    }

    return (
        <>
            <ContainerCarga className={ data === null && 'activo' } />
            <MainCiudad url={ ( data !== null ) ? getFondo( data.stateSky.id ) : "" }>
                <Wrapper>
                    <ContainerCiudad>
                        <Fila justify="flex-start">
                            <Nombre bg="#00000052" padding="2rem 3rem" size="5em">{ ( data !== null ) ? data.municipio.NOMBRE : <></> }</Nombre>
                        </Fila>
                        <Fila bg="#00000052" padding="2em">
                            <Fila flow="column" align="flex-start">
                                <TextoH3>{ ( data !== null ) ? data.stateSky.description : <></> }</TextoH3>
                                <Fila justify="flex-start">
                                    <Grados size="2em" className="max">{ ( data !== null ) ? data.temperaturas.max : <></> }º</Grados>
                                    <Grados size="2em" className="min">{ ( data !== null ) ? data.temperaturas.min : <></> }º</Grados>
                                </Fila>
                                <Nombre size="6em">{ ( data !== null ) ? data.temperatura_actual : <></> }º</Nombre>
                            </Fila>
                            <Fila flow="column" align="flex-end">
                                <Nombre>Humedad: { ( data !== null ) ? data.humedad : <></> } %</Nombre>
                                <Nombre>Viento: { ( data !== null ) ? data.viento : <></> } Km/h</Nombre>
                                <Nombre>Lluvia: { ( data !== null ) ? data.lluvia : <></> } %</Nombre>
                            </Fila>
                        </Fila>
                    </ContainerCiudad>
                    <Fila bg="#00000052" flow="column"  padding="2em" margin="0 0 4em 0">
                        <Nombre width="100%" align="left" className="pronostico" size="1.5em">Pronóstico</Nombre>
                        <Fila justify="flex-start">
                            { data !== null && <SliderPronostico pronostico={ data.pronostico } />}
                        </Fila>
                    </Fila>
                </Wrapper>
            </MainCiudad>
        </>
    )
}

export default PortadaMunicipio;