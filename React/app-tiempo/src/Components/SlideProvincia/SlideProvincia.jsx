import { NavLink } from "react-router-dom";
import { useProvincia } from "../../Hooks/useProvincia.hook";
import { Card , Fila , Nombre , NombreCiudad , ContainerCiudades , Grados } from "../../Styled/Components.styled";

const SlideProvincia = ({ prov }) => {

    // https://www.npmjs.com/package/meteoscrapi

    const { dataProvincia } = useProvincia( prov.CODPROV );
    // if ( dataProvincia !== null ){
    //     console.log( dataProvincia )
    // }
    
    return (
        <>
            <NavLink to={`/provincia/${ prov.CODPROV }`}>
                <Card justify="flex-start">
                    <Fila>
                        <Nombre className="provincia">{ prov.NOMBRE_PROVINCIA}</Nombre>
                    </Fila>
                    <ContainerCiudades>
                        {
                            dataProvincia !== null && dataProvincia.ciudades.map( (ciudad , i) => 
                                <Fila className="ciudad" key={ i }>
                                    <NavLink to={`/municipio/${ciudad.idProvince}/${ciudad.id}`}>
                                        <NombreCiudad>{ciudad.name}</NombreCiudad>
                                    </NavLink>
                                    <Fila justify="flex-end">
                                        <Grados size="1.2em" className="max">{ ciudad.temperatures.max }º</Grados>
                                        <Grados size="1.2em" className="min">{ ciudad.temperatures.min }º</Grados>
                                    </Fila>
                                </Fila>
                            )
                        }
                    </ContainerCiudades>
                </Card>
            </NavLink>
        </>
    )
}

export default SlideProvincia;