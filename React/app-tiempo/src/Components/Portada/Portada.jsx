import { useFetch } from './../../Hooks/useFetch.hook';
import Ciudad from './../Ciudad/Ciudad';
import SliderProvincias from '../SliderProvincias/SliderProvincias';
import { Main , Wrapper , Grid } from '../../Styled/Components.styled';

const Portada = ({}) => {

    const { data } = useFetch('home');
    if( data !== null ) {
        let { provincias } =  data;
    }

    return (
        <Main>
            <Wrapper>
                <Grid>
                    {
                        ( data !== null 
                            ? data.ciudades.map( cadaCiudad => <Ciudad key={cadaCiudad.id} ciudad={ cadaCiudad }/> )
                            : <></>
                        )
                    }
                </Grid>
            </Wrapper>
                {
                    ( data !== null 
                        ?   <SliderProvincias provincias={ data.provincias }>

                            </SliderProvincias>
                        :   <></>
                    )
                }
        </Main>
    )
}

export default Portada;