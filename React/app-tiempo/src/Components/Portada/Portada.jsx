import { useFetch } from './../../Hooks/useFetch.hook';
import Ciudad from './../Ciudad/Ciudad';
import SliderProvincias from '../SliderProvincias/SliderProvincias';
import { Main , Wrapper , Grid , ContainerCarga } from '../../Styled/Components.styled';
import { NavLink } from 'react-router-dom';

const Portada = ({}) => {

    const { data } = useFetch('home');
    if( data !== null ) {
        let { provincias } =  data;
    }

    return (
        <>
            <ContainerCarga className={ data === null && 'activo' } />
            <Main>
                <Wrapper>
                    <Grid>
                        {
                            ( data !== null 
                                ? data.ciudades.map( cadaCiudad => {
                                    return (
                                        <NavLink to={`/municipio/${cadaCiudad.idProvince}/${cadaCiudad.id}`}>
                                            <Ciudad key={cadaCiudad.id} ciudad={ cadaCiudad }/>
                                        </NavLink>
                                    )
                                } )
                                : <></>
                            )
                        }
                    </Grid>
                </Wrapper>
                { data !== null && <SliderProvincias provincias={ data.provincias }/> }
            </Main>
        </>
    )
}

export default Portada;