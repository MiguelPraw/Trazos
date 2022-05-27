import { CardPronostico, ContainerPronostico , Nombre , Grados , Span } from "../../Styled/Components.styled";
import SlidePronostico from "../SlidePronostico/SlidePronostico";

const SliderPronostico = ({ pronostico }) => {

    console.log( pronostico.manana );
    const { temperatura } = pronostico.hoy;
    let hora = new Date().getHours();
    const rango = 24 - hora;
    // console.log( rango );
    // let aux1 = {
    //     temperaturasHoy     : pronostico.hoy.temperatura.slice((pronostico.hoy.temperatura.length + 1) - rango),
    //     temperaturasManana  : pronostico.manana.temperatura,
    //     estadoCieloHoy      : pronostico.hoy.estado_cielo.slice((pronostico.hoy.temperatura.length + 1) - rango),
    //     estadoCieloManana   : pronostico.manana.estado_cielo,
    //     precipitacionHoy    : pronostico.hoy.precipitacion.slice((pronostico.hoy.temperatura.length + 1) - rango),
    //     precipitacionManana : pronostico.manana.precipitacion,
    //     vientoHoy           : pronostico.hoy.viento.slice((pronostico.hoy.temperatura.length + 1) - rango),
    //     vientoManana        : pronostico.manana.viento,
    // }
    // console.log( aux1 );

    let arraySlider = {
        temperaturas        : [ ...pronostico.hoy.temperatura.slice((pronostico.hoy.temperatura.length + 1) - rango)    , ...pronostico.manana.temperatura ],
        estadoCielo         : [ ...pronostico.hoy.estado_cielo.slice((pronostico.hoy.temperatura.length + 1) - rango)   , ...pronostico.manana.estado_cielo ],
        precipitaciones     : [ ...pronostico.hoy.precipitacion.slice((pronostico.hoy.temperatura.length + 1) - rango)  , ...pronostico.manana.precipitacion ],
        viento              : [ ...pronostico.hoy.viento.slice((pronostico.hoy.temperatura.length + 1) - rango)         , ...pronostico.manana.viento ],
    }
    // console.log( arraySlider );

    return (
        <>
            <ContainerPronostico>
                {
                    arraySlider.temperaturas.map( ( cadaTemp , i ) => {
                        const objetoSlide = { 
                            hora            : i,
                            temperatura     : cadaTemp , 
                            cielo           : arraySlider.estadoCielo[i],
                            precipitacion   : arraySlider.precipitaciones[i],
                            viento          : arraySlider.viento[i]
                        }
                        return <SlidePronostico datos={ objetoSlide }></SlidePronostico>
                    })
                }
            </ContainerPronostico>
        </>
    )
}

export default SliderPronostico;