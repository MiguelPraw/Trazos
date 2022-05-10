import { useState , useEffect } from 'react'
import './App.css'
import { useFetch } from './Hooks/useFetch.hook'

const App = () => {

  const [ formulario , setFormulario ] = useState({
    nombre : ''
  });

  const [ updateForm , setUpdateForm ] = useState({
    id : undefined,
    nombre : undefined
  })

  const clase   = useFetch()
  const elegido = useFetch('alumno/1')

  let { nombre } = formulario;

  const valorInput = ( { target } ) => {
    let { name , value } = target;
    setFormulario({
      ...formulario,
      [name] : value
    })
  }

  const valorUpdate = ( { target } ) => {
    let { name , value } = target;
    setUpdateForm({
      ...updateForm,
      [name] : value
    })
  }

  const enviarForm = ( e ) => {
    e.preventDefault();

    const request = { 
      method  : "POST",
      body    : JSON.stringify( formulario ),
      headers : {
        "Content-type" : "application/json"
      }
    };

    fetch('http://localhost:5000/alumno', request)
    .then( res => res.json() )
    .then( data => {
      console.log(data);
    })
  }

  const eliminarAlumno = ( id ) => {
    console.log( id );

    const request = {
      method : "DELETE"
    }

    fetch( 'http://localhost:5000/alumno/' + id , request )
    .then( res => res.json() )
    .then( data => {
      console.log( data );
    })
  }

  const actualizarForm = () => {
    
    const request = {
      method : 'PUT',
      body   : JSON.stringify(updateForm),
      headers : {
        "Content-Type" : "application/json"
      }
    }

    fetch('http://localhost:5000/alumno' , request)
    .then( res => res.json() )
    .then( data => {
      console.log( data );
    })

  }

  const editarAlumno = ( id ) => {
    console.log(id)
    setUpdateForm(clase.find( alumno => alumno.id === id));
  }

  return (
    <div className="App">
      <h1>React conectada con API</h1>    
      <ul>
        {
          clase.map( alumno =>
            <li key={ alumno.id }>
              { alumno.nombre }
              <button onClick={ () => editarAlumno( alumno.id ) }>Editar</button>
              <button onClick={ () => eliminarAlumno( alumno.id ) }>Eliminar</button>
            </li>
          )
        }
      </ul>

      <h2>Eligiendo 1 alumno</h2>
      <h3>{ elegido.nombre }</h3>

      <h2> Añadir un alumno </h2>
      <form onSubmit={ enviarForm }>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre"
          value={ nombre }
          onChange={ valorInput }
          required/>
        <input type="submit" value="Añadir" />
      </form>
      
      {
        updateForm.id != undefined &&
        <>
          <h2> Actualizar alumno </h2>

          <form onSubmit={ actualizarForm }>

            <input 
              type="number" 
              name="id"
              placeholder="ID del usuario"
              value={ updateForm.id }
              onChange={ valorUpdate }/>

            <input 
              type="text" 
              name="nombre" 
              placeholder="Nombre"
              value={ updateForm.nombre }
              onChange={ valorUpdate }
              required/>
            <input type="submit" value="Añadir" />
          </form>
        </>
      }

    </div>
  )
}

export default App
