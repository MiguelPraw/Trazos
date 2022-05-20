import { useEffect, useState } from "react";
import { Wrapper , Slider , BotonFlecha , ContainerSlider } from "../../Styled/Components.styled";
import SlideProvincia from "../SlideProvincia/SlideProvincia";

const SliderProvincias = ({ provincias }) => {

    const [ posicion , setPosicion ]     = useState(0);
    const [ prov , setProv ]             = useState( provincias.slice(0 , 8));
    const [ paginacion , setPaginacion ] = useState(8);

    useEffect(()=>{
        
        console.clear()
        // console.log( '🚨🚨🚨🚨🚨prov' )
        // console.log(  )
        console.log( '🚨🚨🚨🚨🚨prov' )
        console.log( provincias );
        // setProv( provincias.slice(paginacion , paginacion + 8) );
        console.log( prov );
        console.log( '🚨🚨🚨🚨🚨FIN' )
    },[])

    useEffect(()=>{
        let añadir = [ ...provincias.slice( paginacion , paginacion + 8 ) ];
        setProv( [ ...prov , ...añadir] );
    },[paginacion])

    const disminuir = () => {
        setPosicion( posicion - 1 );
    }

    const aumentar = () => {
        setPosicion( posicion + 1 );
        setPaginacion( paginacion + 8 );
    }

    const translateX = () => {
        return `translateX(-${ (100 / 13) * posicion }%)`;
    }

    return (
        <>
            <ContainerSlider>
                <Wrapper>
                    <Slider style={
                        { "transform" : translateX() }
                    }>
                        {
                            prov.map( provincia => <SlideProvincia key={ provincia.CODPROV } prov={ provincia } />)
                        }
                    </Slider>
                </Wrapper>
                <BotonFlecha className={ posicion === 0 && 'disabled' } onClick={ disminuir } left="0px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </BotonFlecha>
                <BotonFlecha className={ posicion >= ( provincias.length / 4 ) - 1  && 'disabled' } onClick={ aumentar } left="null" right="0px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </BotonFlecha>
            </ContainerSlider>
        </>
    )

}

export default SliderProvincias;