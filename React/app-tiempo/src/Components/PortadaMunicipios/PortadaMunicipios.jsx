import { useFetch } from "../../Hooks/useFetch.hook";
import { Main , Wrapper } from "../../Styled/Components.styled";

const PortadaMunicipios = () => {

    const { data } = useFetch('municipios');
    data !== null && console.log( data );

    return (
        <>
            <Main>
                <Wrapper>
                    
                </Wrapper>
            </Main>
        </>
    )

}

export default PortadaMunicipios;