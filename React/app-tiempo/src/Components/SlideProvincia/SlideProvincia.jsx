import { useProvincia } from "../../Hooks/useProvincia.hook";
import { Card , Fila , Nombre } from "../../Styled/Components.styled";

const SlideProvincia = ({ prov }) => {

    // https://www.npmjs.com/package/meteoscrapi

    const { data } = useProvincia( prov.CODPROV );
    if ( data !== null ){
        console.log( data )
    }

    return (
        <>
            <Card>
                <Fila>
                    <Nombre>{ prov.NOMBRE_PROVINCIA}</Nombre>
                </Fila>
                <Fila>
                    {
                        ( data !== null )
                        ?  data.ciudades.map( ciudad => <></>)
                        :  <></>
                    }
                </Fila>
            </Card>
        </>
    )
}

export default SlideProvincia;