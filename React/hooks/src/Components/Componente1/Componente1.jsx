import './Componente1.css';
import { useState , useEffect } from 'react';


const Componente1 = ({}) => {
    console.clear();

    useEffect( () => {
        console.log('Ejecutando useEffect con dependencia vacía');
    }, []);

    const [ edad , setEdad ] = useState(32);
    const [ foto , setFoto ] = useState(0);

    useEffect( () => {
        console.log('Ejecutando useEffect con dependencia de foto')
    }, [ foto ]);

    useEffect( () => {
        /* Función cleanup */
        return function () {
            console.log('Destruyendo componente');
        }
    });

    const anterior = () => {
        setFoto( foto - 1 );
    }

    const siguiente = () => {
        setFoto( foto + 1 );
    }

    const disminuirEdad = () => {
        setEdad( edad - 1 );
    }

    const aumentarEdad = () => {
        setEdad( edad + 1 );
    }

    return (
        <div className="Componente1">
            <h2>{ foto }</h2>

            <button onClick={ () => anterior() }>Disminuir</button>
            <button onClick={ () => siguiente() }>Aumentar</button>

            <h2>{ edad }</h2>

            <button onClick={ () => disminuirEdad() }>Disminuir</button>
            <button onClick={ () => aumentarEdad() }>Aumentar</button>

        </div>
    )
}

export default Componente1;