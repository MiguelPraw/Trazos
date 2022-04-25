import './Componente2.css'
import { useState } from 'react';
import Componente3 from '../Componente3/Componente3';

const Componente2 = ({}) => {

    /* String */
    const [ nombre , setNombre ] = useState( 'Emma' );
    
    /* Number */
    const [ foto , setFoto ] = useState( 0 ); 
    
    /* Boolean */
    const [ meQuiere , setMeQuiere ] = useState( false );
    
    /* Array */
    const [ semana , setSemana ] = useState( [ 'lunes' , 'martes' , 'miercoles' ] );

    const anadirDia = () => {
        setSemana([...semana , 'jueves' ]);
    }

    /* Objeto */
    const [ alumno , setAlumno ] = useState( { nombre : 'Timmy' , edad : 30 } );

    const cambiarNombre = () => {
        setAlumno( { ...alumno , nombre : 'Emma' } );
    }

    const anadirApellido = () => {
        setAlumno( { ...alumno , apellido : 'Watson' } );
    }

    return (
        <div className="Componente2">
            <h3>Componente2</h3>
            <p>{ nombre }</p>
            <button onClick={ () => setNombre( 'Watson' ) }>Cambiar Nombre</button>
        
            <h3>{ foto }</h3>
            <button onClick={ () => setFoto( foto + 1 ) }>Aumentar Foto</button>

            <h3>{ meQuiere ? 'Cierto' : 'Noup' }</h3>
            <button onClick={ () => setMeQuiere( !meQuiere ) }>Toggle Boolean</button>

            <h3>{ semana }</h3>
            <button onClick={ () => anadirDia() }>Añadir dia</button>

            <h3>{ alumno.nombre } { alumno.apellido } { alumno.edad }</h3>
            <button onClick={ () => cambiarNombre() }>Cambiar Nombre</button>
            <button onClick={ () => anadirApellido() }>Añadir propiedad</button>

            { meQuiere && <Componente3 /> }

        </div>
    )
}

export default Componente2;