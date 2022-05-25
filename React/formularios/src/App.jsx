import { useState } from 'react';
import './App.css'

const App = () => {

  const [ formulario , setFormulario ] = useState({
    nombre    : '',
    apellido  : '',
    email     : '',
    consulta  : '',
    ciudad    : 'Madrid',
    genero    : 'hombre',
    acepto    : false,
    edad      : 0
  });

  let { nombre , apellido , edad , email , consulta , ciudad , genero , acepto } = formulario;

  const formChange = ({ target }) => {
    let { value , type , name , checked } = target;
    /* let valor = type === 'checkbox' ? checked : value */
    setFormulario({
      ...formulario,
      [ name ] : type === 'checkbox' ? checked : value
    })
  }

  const enviarForm = () => {

    fetch()
  }

  return (
    <div className="App">
      <h1>Formularios</h1>

      <h2>{ nombre } { apellido }</h2>
      <h2>{ edad }</h2>
      <h2>{ email }</h2>
      <h2>{ consulta }</h2>
      <h2>{ ciudad }</h2>
      <h2>{ genero }</h2>
      <h2>{ acepto ? 'si' : 'no' }</h2>

      <form onSubmit={ enviarForm }>
        <input 
          type="text" 
          name="nombre" 
          placeholder="nombre" 
          value={ nombre } 
          onChange={ formChange } />

        <input 
          type="text" 
          name="apellido" 
          placeholder="apellido" 
          value={ apellido } 
          onChange={ formChange } />

        <input 
          type="number"
          name="edad"
          value={ edad }
          onChange={ formChange }/>

        <input 
          type="email"
          name="email"
          value={ email }
          onChange={ formChange } />

        <textarea 
          name="consulta" 
          value={ consulta }
          onChange={ formChange }></textarea>

          <select 
            name="ciudad"
            onChange={ formChange }>
            <option value="Madrid">Madrid</option>
            <option value="Cádiz">Cádiz</option>
            <option value="Barna">Barna</option>
          </select>

          <label htmlFor="genero">Hombre</label>
          <input 
            type="radio" 
            name="genero" 
            value="hombre"
            defaultChecked
            onChange={ formChange }/>
          <label htmlFor="genero">Mujer</label>
          <input 
            type="radio" 
            name="genero" 
            value="mujer"
            onChange={ formChange }/>
          
          <input 
            type="checkbox"
            name="acepto"
            onChange={ formChange } />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default App;