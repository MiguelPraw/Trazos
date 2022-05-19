import { useProvincia } from "../../Hooks/useProvincia.hook";
import { Card , Fila , Nombre , NombreCiudad , ContainerCiudades , Grados } from "../../Styled/Components.styled";

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
                    <Nombre className="provincia">{ prov.NOMBRE_PROVINCIA}</Nombre>
                </Fila>
                <ContainerCiudades>
                    {
                        ( data !== null )
                        ?   data.ciudades.map( ciudad => 
                                <Fila>
                                    <NombreCiudad>{ciudad.name}</NombreCiudad>
                                    <Fila justify="flex-end">
                                        <Grados className="max">{ ciudad.temperatures.max }º</Grados>
                                        <Grados className="min">{ ciudad.temperatures.min }º</Grados>
                                    </Fila>
                                </Fila>
                            )
                        :   <></>
                    }
                </ContainerCiudades>
            </Card>
        </>
    )
}

export default SlideProvincia;