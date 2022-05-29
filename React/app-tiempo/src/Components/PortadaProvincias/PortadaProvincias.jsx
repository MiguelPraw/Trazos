import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch.hook";
import { Main , Wrapper , Nombre , ContainerProvincias , Input , Provincias , Provincia } from "../../Styled/Components.styled";

const PortadaProvincias = () => {

    const { data } = useFetch("provincias");
    if( data !== null ) {
        console.log( data );
    }

    const [ formulario , setFormulario ] = useState({
        provincia : ''
    });

    const [ prov , setProv ] = useState(data);

    let { provincia } = formulario;

    useEffect( () => {
        data !== null && setProv( data.provincias.filter( cadaProv => cadaProv.NOMBRE_PROVINCIA.toLowerCase().includes( formulario.provincia.toLowerCase() ) ));
        console.log(prov)
    } , [formulario]);


    const formChange = ({ target }) => {
        let { value , name } = target;
        console.log( value )
        setFormulario({
            [ name ] : value
        })
    }

    return (
        <>
            <Main url="https://static.vecteezy.com/system/resources/previews/002/224/120/non_2x/bright-sunny-day-with-blue-sky-with-white-clouds-free-photo.jpg">
                <Wrapper>
                    <ContainerProvincias>
                        <Nombre size="3em">Provincias de España</Nombre>
                        <form>
                            <Input 
                                type="text" 
                                name="provincia" 
                                placeholder="Escribe una provincia..." 
                                autoComplete="off"
                                value={ provincia }
                                onChange={ formChange }/>
                        </form>
                        <Provincias>
                            {
                                data !== null && data.provincias.map( prov => {
                                    return (
                                        <NavLink key={ prov.CODPROV } to={`/provincia/${prov.CODPROV}`}>
                                            <Provincia>
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