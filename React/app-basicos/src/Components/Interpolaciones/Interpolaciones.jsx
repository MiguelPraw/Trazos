import './Interpolaciones.scss'

const Verdadero = ({}) => {
    return ( <>Si</> )
}

const Falso = ({}) => {
    return ( <>No</> )
}

const Titulo = ({ texto }) => {
    return (
        <h2>{ texto }</h2>
    )
}

const Interpolaciones = ({}) => {
    
    let foto        = 0;
    let nombre      = "Timmy";
    let meQuiere    = false;
    let semana      = [ 'lunes' , 'martes' , 'miercoles' ];
    let alumno      = {
        nombre      : 'Timmy',
        apellido    : 'Anderson',
        edad        : 21
    }

    let clase       = [
        { id : 0, nombre : "Emma" , apellido : "Watson"     , edad : 32 },
        { id : 1, nombre : "John" , apellido : "Wick"       , edad : 57 },
        { id : 2, nombre : "Albus", apellido : "Dumbledore" , edad : 115 },
        { id : 3, nombre : "Harry", apellido : "Potter"     , edad : 14 }
    ]


    return (
        <div className="Interpolaciones">
            <h2>Soy Interpolaciones</h2>

            {/* <h3>{ foto }</h3>
            <h3>{ nombre }</h3>
            <h3>{ alumno.nombre }</h3> */}

            {/* Con booleanos se usa el ternario */}
            {/* <h3>{ meQuiere ? 'si' : 'no' }</h3>
            <h3>{ meQuiere ? <Verdadero/> : <Falso/> }</h3> */}

            {/* Con arrays se usa el .map */}

            {/* <ul>
                { 
                    semana.map( ( cadaDia , i ) => {
                        return <li key={i}> {cadaDia} {i}</li>;
                    }) 
                }
            </ul> */}

            {/* <ul>
                {
                    clase.map( ( alumno, i ) => 
                        <section key={alumno.id}>
                            <h2>{alumno.nombre}</h2>
                            <h3>{alumno.apellido}</h3>
                            {
                                alumno.edad >= 18 
                                ? <p>Es mayor de edad</p>
                                : <p>Es menor de edad</p>
                            }
                        </section>
                    )
                }
            </ul> */}

            <Titulo texto={ 'Primer turno'  }/>
            <Titulo texto={ 'Segundo turno' }></Titulo>


        </div>
    )
}

export default Interpolaciones;