import './Bucles.scss'

const Bucles = ({}) => {
    
    let semana = [ 'lunes' , 'martes' , 'miércoles' ];

    let clase = [
        { id : 0 , nombre : "Emma" },
        { id : 1 , nombre : "Timmy" },
        { id : 2 , nombre : "John" },
        { id : 3 , nombre : "Elva" }
    ]
    
    return (
        <div className="Bucles">
            <h1>Soy Bucles</h1>

            <ul>
                {
                    semana.map( ( cadaDia , i ) => <li key={i}>{ cadaDia }</li>)
                }
            </ul>

            <ul>
                {
                    semana.map( ( cadaDia , i ) => <li key={i}>{ cadaDia }</li>)
                }
            </ul>

            <ul>
                {
                    semana.map( ( cadaDia , i ) => <li key={i}>{ cadaDia }</li>)
                }
            </ul>

            <ul>
                {
                    semana.map( ( cadaDia , i ) => <li key={i}>{ cadaDia }</li>)
                }
            </ul>

            <ul>
                {
                    semana.map( ( cadaDia , i ) => <li key={i}>{ cadaDia }</li>)
                }
            </ul>

            <ul>
                {
                    clase.map( alumno => <li key={alumno.id}>{ alumno.nombre}</li>)
                }
            </ul>

            <ul>
                {
                    clase.map( alumno => <li key={alumno.id}>{ alumno.nombre }</li>)
                }
            </ul>

            <ul>
                {
                    clase.map( alumno => <li key={alumno.id}>{ alumno.nombre }</li>)
                }
            </ul>


        </div>
    )
}

export default Bucles;