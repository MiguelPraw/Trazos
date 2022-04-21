import './Banner.scss'

const BannerContainer = ({ banner, clase }) => {
    return (
        <div className={`Banner-container ${ clase }`}>
            <div className={`Banner-imagen ${clase}`}>
                <img src={banner.img} alt="imagen" className={`Banner-img ${clase}`} />
            </div>
            <div className={`Banner-info ${clase}`}>
                <svg className="Banner-svg"></svg>
                <h3 className='Banner-h3'>{ banner.titulo }</h3>
                <p className='Banner-p'>{ banner.subtitulo }</p>
            </div>
        </div>
    )
}

const Banner = ({ banner, posicion }) => {
    return (
        <div className={`Banner ${banner.clase}`}>
            {
                ( posicion % 2 === 0 )
                    ?   ( posicion < 2 ) 
                        ? <BannerContainer banner={banner} clase={'par arriba'}/>
                        : <BannerContainer banner={banner} clase={'par abajo'}/>
                    :   ( posicion < 2 )
                        ? <BannerContainer banner={banner} clase={'impar arriba'}/>
                        : <BannerContainer banner={banner} clase={'impar abajo'}/>
            }
        </div>
    )
}

export default Banner;