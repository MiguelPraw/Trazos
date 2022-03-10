import { Fragment, useState } from "react";

function Slider () {
    
    const arrayUrls = [
        "https://picsum.photos/id/220/800/600",
        "https://picsum.photos/id/230/800/600",
        "https://picsum.photos/id/229/800/600",
        "https://picsum.photos/id/217/800/600",
        "https://picsum.photos/id/218/800/600"
    ];

    const [ imgActual, setImgActual ] = useState ( 0 );

    const [ url, setUrl ] = useState (arrayUrls[imgActual]);

    console.log("inicial", imgActual);

    const siguienteImagen = () => {
        if (imgActual >= arrayUrls.lenght - 1) {
            setImgActual( 0 );
        } else {
            setImgActual( imgActual + 1 );
        }
        console.log("posicion actual", imgActual);
        setUrl(arrayUrls[imgActual]);
    }

    const anteriorImagen = () => {
        if (imgActual < 0) {
            setImgActual( arrayUrls.length - 1 );
        } else {
            setImgActual ( imgActual - 1);
        }
        console.log("posicion actual", imgActual);
        setUrl(arrayUrls[imgActual+1]);
    }

    const pintaImagen = () => {
        return (<img src={arrayUrls[imgActual]} alt="hola"></img>);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="container__boton">
                    <button onClick={anteriorImagen} className="boton"> Prev </button>
                </div>
                <div className="slider">
                    {pintaImagen()}
                    {imgActual}
                    {url}
                </div>
                <div className="container__boton">
                    <button onClick={siguienteImagen} className="boton"> Next </button>
                </div>
            </div>
        </Fragment>
    );
}

export default Slider;