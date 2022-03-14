import { Fragment, useEffect, useRef, useState } from "react";

function Alumnos () {

    const [ listaAlumnos, setListaAlumnos ] = useState ( [
        {nombre: "Pepe", apellido: "Martinez", nota: 8},
        {nombre: "Maria", apellido: "Jimenez", nota: 7},
        {nombre: "Juan", apellido: "Alvarez", nota: 4},
        {nombre: "Fernando", apellido: "Martinez", nota: 5},
    ]);

    const [ listaActual, setListaActual ] = useState ( listaAlumnos );

    let notaInput = useRef();
    let nombreInput = useRef();

    // Nos permite crear efectos secundarios
    // Efecto primario -> Mantener los cambios del estado y del DOM
    useEffect( () => {
        let alumnos = localStorage.getItem('listaAlumnos');
        setListaAlumnos( JSON.parse(alumnos));
        setListaActual( JSON.parse(alumnos));
    }, [] ); // SOLO se ejecuta al inicio
    
    useEffect( () => {
        console.log( 'Efecto secundario' );
    }); // Esta pendiente de todos los cambios y al inicio

    
    useEffect( () => {
        let json = JSON.stringify(listaAlumnos);
        localStorage.setItem( 'listaAlumnos', json );
    }, [ listaAlumnos ]); // Añadir los corchetes al final te permite suscribirte a cualquier cambio que tenga este estado

    const filter = () => {
        let nota = Number(notaInput.current.value);
        let lista = [];
        if (nota === 0) {
            lista = listaAlumnos;
        } else {
            lista = listaAlumnos.filter( cadaAlumno => {
                if (cadaAlumno.nota === nota) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        setListaActual( lista );
    };

    const añadeAlumno = () => {
        const valor = nombreInput.current.value;
        setListaAlumnos ( [...listaAlumnos, {nombre: valor, apellido: "TEST", nota: 6}] );
        setListaActual ( [...listaActual, {nombre: valor, apellido: "TEST", nota: 6}] );
        nombreInput.current.value = "";
    };

    const pintaAlumnos = () => {
        const lista = listaActual.map( (cadaAlumno, index) => {
            return (
                <div key={index} className="alumno">
                    <span> {cadaAlumno.nombre} </span>
                    <span> {cadaAlumno.apellido} </span>
                    <span> {cadaAlumno.nota} </span>
                </div>
            )
        })
        return lista;
    };

    return (
        <Fragment>
            <div className="container__input">
                <input ref={nombreInput} type="text"/>
                <button onClick={añadeAlumno}> Añade Alumno </button>
                <input onInput={filter} ref={notaInput} type="number"/>
            </div>
            <div className="container__alumnos">
                <div className="cabecera">
                    <span>Nombre</span>
                    <span>Apellido</span>
                    <span>Nota</span>
                </div>
                { pintaAlumnos() }
            </div>
        </Fragment>
    );

}

export default Alumnos;