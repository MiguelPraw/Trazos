import { MainCiudad , Wrapper , ContainerCiudad , Nombre, Fila , Grados , TextoH3 } from "../../Styled/Components.styled";
import { useFetchCiudad } from "./../../Hooks/useFetch.hook";

const PortadaMunicipio = ({ idProvincia , idMunicipio }) => {
    
    let { data } = useFetchCiudad( idProvincia , idMunicipio );
    if( data !== null) {
        console.log( data );
    }

    const listaFondos = [
        {
            nombre  : "despejado",
            url     : "https://images.freeimages.com/images/large-previews/e62/clear-sky-1363026.jpg"
        },
        {
            nombre  : "lluvia",
            url     : "https://www.efeverde.com/storage/2018/11/espa%C3%B1a-lluvia.jpg"
        },
        {
            nombre  : "cubierto",
            url     : "https://www.elciudadanoweb.com/wp-content/uploads/2018/12/cielo.jpg"
        },
        {
            nombre  : "nuboso",
            url     : "https://lavozdetomelloso.com/api/mediafiles/0031653a-9e4b-42f4-b5c6-c08697ddab06"
        },
        {
            nombre  : ""
        }
    ]

    const getFondo = ( numero ) => {
        if( numero >= 10 && numero <= 12 ) {
            return listaFondos[0].url;
        } else if ( numero >= 13 && numero <= 14 ) {
            return listaFondos[3].url;
        } else if ( numero >= 15 && numero <= 18 ) {
            return listaFondos[2].url;
        } else if ( numero >= 18 && numero <= 26 ) {
            return listaFondos[1].url;
        } else if ( numero >= 51 && numero <= 64 ) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-lightning-rain" viewBox="0 0 16 16">
                    <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z"/>
                </svg>
            )
        }
    }

    return (
        <>
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
                </Wrapper>
            </MainCiudad>
        </>
    )
}

export default PortadaMunicipio;