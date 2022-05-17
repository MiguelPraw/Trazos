import { useFetch } from './../../Hooks/useFetch.hook';
import Ciudad from './../Ciudad/Ciudad'
import { Main , Wrapper , Grid } from '../../Styled/Components.styled';

const Portada = ({}) => {

    const datos = useFetch('home');
    // console.log( datos.data );
    // if( datos.data !== null ) {
    //     console.log( datos.data.provincias );
    // }

    return (
        <Main>
            <Wrapper>
                <Grid>
                    {
                        ( datos.data !== null 
                            ? datos.data.ciudades.map( cadaCiudad => <Ciudad key={cadaCiudad.id} ciudad={ cadaCiudad }/> )
                            : <></>
                        )
                    }
                </Grid>
            </Wrapper>
        </Main>
    )
}

export default Portada;