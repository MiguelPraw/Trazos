import { useState , useEffect } from 'react'
import './App.css'
import { useFetch } from './Hooks/useFetch.hook'

const App = () => {

  const [ formulario , setFormulario ] = useState({
    nombre : ''
  });
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

  return (
    <div className="App">
      <h1>React conectada con API</h1>    
      <ul>
        {
          clase.map( alumno =>
            <li key={ alumno.id }>{ alumno.nombre }</li>
            )
        }
      </ul>

      <h2>Eligiendo 1 alumno</h2>
      <h3>{ elegido.nombre }</h3>

      <h2> Añadir un alumno </h2>
      <h3>{ nombre }</h3>
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
    </div>
  )
}

export default App
