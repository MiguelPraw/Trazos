import './Slider.scss'
import { useEffect, useState, useLayoutEffect } from 'react';

const Slider = ({ listaImg }) => {

    const [ foto     , setFoto     ] = useState(0);
    const [ imagenes , setImagenes ] = useState( [] );

    useEffect( () => {
        setImagenes( listaImg );
    }, []);

    useLayoutEffect( () => {
        /* Antes de renderizar calcula las dimensiones del elemento */
        translateMove();
        ancho();
        gridMove();
    }, [ imagenes ]);

    const siguiente = () => {
        ( foto >= imagenes.length - 1 ) ? setFoto(0) : setFoto( foto + 1);
    }

    const anterior = () => {
        ( foto <= 0 ) ? setFoto( imagenes.length - 1 ) : setFoto( foto - 1 );
    }

    const punto = ( valor ) => {
        setFoto( valor );
    }

    const translateMove = () => {
        return `translateX(${ (-100 / imagenes.length ) * foto }%)`;
    }

    const ancho = () => {
        return `${ 100 * ( imagenes.length / 2 )}%`;
    }

    const gridMove = () => {
        return `repeat( ${ imagenes.length } , 1fr)`;
    }

    return (
        <div className="Slider">
            <div 
                style={ { 
                    width               : ancho(),
                    transform           : translateMove(),
                    gridTemplateColumns : gridMove()} }
                className="Slider-move">
                {
                    imagenes.map( (cadaImagen , i) => {
                        return(
                            <img 
                                key={ cadaImagen.id } 
                                src={ cadaImagen.src } 
                                alt={ cadaImagen.alt } 
                                className="Slider-img" />
                        )
                    })
                }
            </div>

            <ul className="Slider-ul">
                {
                    imagenes.map( ( cadaImagen , i ) => {
                        return (
                            <li 
                                key={ cadaImagen.id }
                                onClick={ () => punto(i) } 
                                className={ `Slider-li ${ foto === i && 'active' }` }
                            ></li>
                        )
                    })
                }
            </ul>

            <svg 
                onClick={ () => anterior() }
                className="Slider-arrow prev" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            <svg 
                onClick={ () => siguiente() }
                className="Slider-arrow next" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    )
}

export default Slider;