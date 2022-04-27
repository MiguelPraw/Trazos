import { Seccion, Bloque, Imagen, Titulo, Subtitulo, Wrapper, Icono } from "../Components.styled"


const BannerContainer = ({ banner, direction, padding, posicion }) => {
    return (
        <Wrapper className="flex" direction={ direction } padding={ padding }>
            <Imagen src={ banner.img }></Imagen>
            <Bloque className="columna" width="40%">
                <Icono></Icono>
                <Titulo className="columna" color={ posicion !== 2 ? "white" : undefined }>{ banner.titulo }</Titulo>
                <Subtitulo color={ posicion !== 2 ? "white" : undefined }>{ banner.subtitulo }</Subtitulo>
            </Bloque>
        </Wrapper>
    )
}

const Banner = ({ banner , posicion }) => {
    return (
        <Seccion className={ banner.clase } padding="0">
            {
                ( posicion % 2 === 0 )
                    ?   ( posicion < 2 ) 
                        ? <BannerContainer banner={ banner } direction="row" padding="0 0 5em 0" posicion={ posicion } />
                        : <BannerContainer banner={ banner } direction="row" padding="5em 0 0 0" posicion={ posicion } />
                    :   ( posicion < 2 )
                        ? <BannerContainer banner={ banner } direction="row-reverse" padding="0 0 5em 0" posicion={ posicion } />
                        : <BannerContainer banner={ banner } direction="row-reverse" padding="5em 0 0 0" posicion={ posicion } />
            }
        </Seccion>
    )
}

export default Banner;