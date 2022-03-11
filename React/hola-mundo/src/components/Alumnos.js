import { Fragment, useRef, useState } from "react";

function Alumnos () {

    const [ listaAlumnos, setListaAlumnos ] = useState ( [
        {nombre: "Pepe", apellido: "Martinez", nota: 8},
        {nombre: "Maria", apellido: "Jimenez", nota: 7},
        {nombre: "Juan", apellido: "Alvarez", nota: 4},
        {nombre: "Fernando", apellido: "Martinez", nota: 5},
    ]);

    const [ listaActual, setListaActual ] = useState ( listaAlumnos );

    let notaInput = useRef();

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

    const pintaAlumnos = () => {
        const lista = listaActual.map( cadaAlumno => {
            return (
                <div className="alumno">
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