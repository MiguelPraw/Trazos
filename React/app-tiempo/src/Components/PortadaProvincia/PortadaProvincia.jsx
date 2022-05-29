import { NavLink } from "react-router-dom";
import { useProvincia } from "./../../Hooks/useProvincia.hook";
import { ContainerCarga , Main , Wrapper , Nombre , ContainerProvincia , Grid , Municipios , Container, Municipio , BotonMunicipios } from "../../Styled/Components.styled";
import Ciudad from "../Ciudad/Ciudad";
import { useMunicipios } from "../../Hooks/useMunicipios.hook";
import { useState } from "react";

const PortadaProvincia = ({ idProv }) => {

    const [ municipios , setMunicipios ] = useState( false );

    const { dataMunicipios } = useMunicipios( idProv );
    const { dataProvincia } = useProvincia( idProv );
    
    dataProvincia !== null && console.log( dataProvincia );
    dataMunicipios !== null && console.log( "MUNICIPIOS" , dataMunicipios );

    const muestraMunicipios = () => {
        setMunicipios( !municipios );
    }

    return (
        <>
            <ContainerCarga className={ ( dataProvincia === null && dataMunicipios === null ) ? 'activo' : '' }/>
            <Main url="https://static.vecteezy.com/system/resources/previews/002/224/120/non_2x/bright-sunny-day-with-blue-sky-with-white-clouds-free-photo.jpg">
                <Wrapper>
                    <ContainerProvincia>
                        <Nombre size="2em">{ dataProvincia !== null && dataProvincia.provincia.NOMBRE_PROVINCIA }</Nombre>
                        <Grid>
                            {
                                dataProvincia !== null && dataProvincia.ciudades.map( cadaCiudad => {
                                    return (
                                        <NavLink key={ cadaCiudad.id } to={ `/municipio/${idProv}/${cadaCiudad.id}` }>
                                            <Ciudad ciudad={ cadaCiudad } />
                                        </NavLink>
                                    )
                                })
                            }
                        </Grid>
                        <Container>
                            <Nombre size="1.5em">Lista de Municipios</Nombre>
                            <BotonMunicipios onClick={ muestraMunicipios } >
                                <svg className={ municipios && 'activo' } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </BotonMunicipios>
                        </Container>
                        <Municipios className={ municipios && 'activo'}>
                            {
                                dataMunicipios !== null && dataMunicipios.municipios.map( cadaMunicipio => {
                                    return (
                                        <NavLink to={`/municipio/${idProv}/${ cadaMunicipio.CODIGOINE.slice(0 , 5) }`}>
                                            <Municipio> { cadaMunicipio.NOMBRE } </Municipio>
                                        </NavLink>
                                    )
                                })
                            }
                        </Municipios>
                    </ContainerProvincia>
                </Wrapper>
            </Main>
        </>
    )
}

export default PortadaProvincia;