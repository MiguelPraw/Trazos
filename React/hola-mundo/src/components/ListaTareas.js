import { Fragment, useEffect, useRef, useState } from "react";

function ListaTareas () {

    const [ listaTareas, setListaTareas ] = useState ( [
        // {nombre: "JS", estado: "pendiente"},
        // {nombre: "Angular", estado: "completada"},
        // {nombre: "React", estado: "completada"},
        // {nombre: "HTML", estado: "pendiente"}
    ]);

    useEffect( () => {
        let tareas = localStorage.getItem('tareas');
        setListaTareas(JSON.parse(tareas));
    }, []);

    useEffect( () => {
        let json = JSON.stringify( listaTareas );
        localStorage.setItem('tareas', json);
    }, [ listaTareas ]);

    let entradaInput = useRef();

    const getTareasPendientes = () => {
        return listaTareas.filter( cadaTarea => {
            if (cadaTarea.estado === "pendiente") {
                return true;
            } else {
                return false;
            }
        });
    }

    const completaTarea = (tarea) => {
        const lista = listaTareas.map( cadaTarea => {
            if ( cadaTarea === tarea) {
                cadaTarea.estado = "completada";   
            }
            return cadaTarea;
        });
        setListaTareas(lista);
    }

    const pendienteTarea = (tarea) => {
        const lista = listaTareas.map( cadaTarea => {
            if ( cadaTarea.nombre === tarea.nombre) {
                cadaTarea.estado = "pendiente";   
            }
            return cadaTarea;
        });
        setListaTareas(lista);
    }

    const borraTarea = (tarea) => {
        const lista = listaTareas.filter( cadaTarea => {
            if (cadaTarea === tarea) {
                return false;
            } else {
                return true;
            }
        });
        setListaTareas(lista);
    }

    const añadeTarea = () => {
        const valor = entradaInput.current.value;
        setListaTareas( [...listaTareas, {nombre: valor, estado: "pendiente"}]);
        entradaInput.current.value = "";
    }

    const getTareasCompletadas = () => {
        return listaTareas.filter( cadaTarea => {
            if (cadaTarea.estado === "completada") {
                return true;
            } else {
                return false;
            }
        });
    }

    const pintaTareasPendientes = () => {
        const tareas = getTareasPendientes();
        return tareas.map ( (tarea, index) => {
            return (
                <div key={index} className="tarea pendiente">
                    <span> {tarea.nombre} </span>
                    <div className="container__botones">
                        <button className="btn_completar" onClick={ () => completaTarea(tarea) }> Completar </button>
                        <button className="btn_borrar" onClick={ () => borraTarea(tarea) }> Borrar </button>
                    </div>
                </div>
            );
        });
    }

    const pintaTareasCompletadas = () => {
        const tareas = getTareasCompletadas();
        return tareas.map ( (tarea, index) => {
            return (
                <div key={index} className="tarea completada">
                    <span> {tarea.nombre} </span>
                    <div className="container__botones">
                        <button className="btn_pendiente" onClick={ () => pendienteTarea(tarea) }> Pendiente </button>
                        <button className="btn_borrar" onClick={ () => borraTarea(tarea) }> Borrar </button>
                    </div>
                </div>
            );
        });
    }

    return (
        <Fragment>
            <div>
                <input ref={entradaInput} type="text" />
                <button onClick={añadeTarea} > Añadir </button>
            </div>
            <div className="container__tareas">
                <h2> Tareas pendientes </h2>
                <div className="tareas-pendientes">
                    {pintaTareasPendientes()}
                </div>
                <h2> Tareas completadas </h2>
                <div className="tareas-completadas">
                    {pintaTareasCompletadas()}
                </div>
            </div>
        </Fragment>
    );
}

export default ListaTareas;