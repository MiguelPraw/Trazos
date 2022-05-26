import { CardPronostico, ContainerPronostico , Nombre , Grados } from "../../Styled/Components.styled";

const SliderPronostico = ({ pronostico }) => {

    console.log( pronostico.hoy );
    const { temperatura } = pronostico.hoy;
    let hora = new Date().getHours();
    const rango = 24 - hora;
    // console.log( rango );
    let aux = temperatura.slice((temperatura.length + 1) - rango);
    let aux1 = {
        temperaturasHoy     : pronostico.hoy.temperatura.slice((pronostico.hoy.temperatura.length + 1) - rango),
        temperaturasManana  : pronostico.manana.temperatura,
        estadoCieloHoy      : pronostico.hoy.estado_cielo.slice((pronostico.hoy.temperatura.length + 1) - rango),
        estadoCieloManana   : pronostico.manana.estado_cielo,
        precipitacionHoy    : pronostico.hoy.precipitacion.slice((pronostico.hoy.temperatura.length + 1) - rango),
        precipitacionManana : pronostico.manana.precipitacion,
    }
    console.log( aux1 )

    return (
        <>
            <ContainerPronostico>
                {
                    aux.map( ( cadaHora , i ) => {
                        return (
                            <CardPronostico key={ i }>
                                <Nombre>{ hora + 1 + i }:00</Nombre>
                                <Grados>{ cadaHora }º</Grados>
                            </CardPronostico>
                        )
                    })
                }
                {
                    aux1.temperaturasManana.map( ( cadaTemp , i ) => {
                        return (
                            <CardPronostico key={ i }>
                                <Nombre>{ i }:00</Nombre>
                                <Grados>{ cadaTemp }º</Grados>
                            </CardPronostico>
                        )
                    })
                }
            </ContainerPronostico>
        </>
    )
}

export default SliderPronostico;