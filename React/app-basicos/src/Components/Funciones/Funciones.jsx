import './Funciones.scss'

const Titulo = ({ texto }) => <h2>{ texto }</h2>

const Boton = ({ texto , url }) => 
    <a 
        href={url}
        title={texto}>{ texto }</a>

const Funciones = ({}) => {

    const secciones = [
        { id : 0 , titulo : 'Primer Turno'  , url : '#' , boton : 'Boton Primer Turno'},
        { id : 1 , titulo : 'Segundo Turno' , url : '#' , boton : 'Boton Segundo Turno'},
        { id : 2 , titulo : 'Tercer Turno'  , url : '#' , boton : 'Boton Tercer Turno'},
        { id : 3 , titulo : 'Cuarto Turno'  , url : '#' , boton : 'Boton Cuarto Turno'},
        { id : 4 , titulo : 'Quinto Turno'  , url : '#' , boton : 'Boton Quinto Turno'}
    ]

    return (
        <div className="Funciones">

            {/* <Titulo texto={ 'Primer Turno' } />
            <Titulo texto={ 'Segundo Turno' } />

            <Boton 
                texto={ 'Web de Apple' }
                url={ 'https://apple.es' }
                />
            <Boton 
                texto={ 'Youtube de Edu' }
                url={ 'https://youtube.com/EduardoFierroPro' }/> */}

            {
                secciones.map( seccion => 
                    <section key={seccion.id}>
                        <Titulo texto={seccion.titulo}/>
                        <Boton 
                            url={seccion.url}
                            texto={seccion.boton}/>
                    </section>        
                
            )}
            <hr />
            {
                secciones.map( seccion => 
                    <section key={seccion.id}>
                        <Titulo texto={seccion.titulo} />
                        <Boton 
                            url={seccion.url}
                            texto={seccion.boton}/>
                    </section>
                    )
            }

        </div>
    )
}

export default Funciones;