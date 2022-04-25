import { Seccion, Bloque, Imagen, Titulo, Subtitulo, Wrapper, Icono } from "../Components.styled"


const BannerContainer = ({ banner, direction, padding }) => {
    return (
        <Wrapper className="flex" direction={ direction } padding={ padding }>
            <Imagen src={ banner.img }></Imagen>
            <Bloque>
                <Icono></Icono>
                <Titulo>{ banner.titulo }</Titulo>
                <Subtitulo>{ banner.subtitulo }</Subtitulo>
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
                        ? <BannerContainer banner={banner} direction="row" padding="0 0 4em 0" />
                        : <BannerContainer banner={banner} direction="row" padding="4em 0 0 0" />
                    :   ( posicion < 2 )
                        ? <BannerContainer banner={banner} direction="row-reverse" padding="0 0 4em 0" />
                        : <BannerContainer banner={banner} direction="row-reverse" padding="4em 0 0 0" />
            }
        </Seccion>
    )
}

export default Banner;