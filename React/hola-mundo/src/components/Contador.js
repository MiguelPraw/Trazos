import { Fragment, useState } from 'react';

function Contador () {

    // let contador = 0;
    const [ contador, setContador ] = useState( 0 );
    // const [ nombreGETTER, nombreSETTER ] = useState( ESTADO_INICIAL );

    const [ asteriscos, setAsteriscos ] = useState( "" );
    
    const next = () => {
        console.log("Sumar");
        setContador(contador + 1);
        setAsteriscos( asteriscos + "*" );
    }

    const prev = () => {
        console.log("Restar");
        setContador(contador - 1);
    }

    const getParImpar = () => {
        return contador % 2 === 0 ? "PAR" : "IMPAR";
    }

    const getDivParImpar = () => {
        if (contador % 2 === 0) {
            return (
                <div className="par">
                    PAR
                </div>
            );
        } else {
            return (
                <div className="impar">
                    IMPAR
                </div>
            );
        }
    }

    return (
        <Fragment>
            <h2> Contador </h2>
            <div className="contador">
                {contador}
                <p> {asteriscos} </p>
                <div className="botones">
                    {/* Si ponemos los () tras la funcion se ejecuta sin clickar */}
                    <button onClick={prev}> Menos </button>
                    <button onClick={next}> Mas </button>
                </div>
                <div className="esPar">
                    {/* 

                        -- OPCION 1 --

                    { contador % 2 === 0 ? "PAR" : "IMPAR" }
                    <br></br>

                        -- OPCION 2 --

                    { getParImpar() }
                    <br></br>

                        -- OPCION 3 --
                    {
                        (contador % 2 === 0) && 
                        <div className="par">
                            PAR
                        </div>
                    }
                    {
                        (contador % 2 !== 0) &&
                        <div className="impar">
                            IMPAR
                        </div>
                    }
                    <br></br> 

                        -- OPCION 4 --
                    
                    */}
                    { getDivParImpar() }
                </div>
            </div>
        </Fragment>
    );    
}

export default Contador;