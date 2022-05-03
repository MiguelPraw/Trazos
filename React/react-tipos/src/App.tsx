import { useState } from 'react'
import './App.css'
import Componente1 from './Components/Componente1'

interface IAlumno {
  nombre : string,
  edad : number
}

type TAlumno = {
  nombre : string,
  edad  : number
}

/* const App : React.FC = () => { */
/* const App : React.FunctionComponent = () => { */
const App = () : JSX.Element => {
  
  const [ foto , setFoto ] = useState<number>( 0 );

  const alumno : TAlumno = {
    nombre : 'Timmy',
    edad  : 30
  }
  
  const aumentar = () : void => {
    setFoto( foto + 1);
  }

  const ponerFoto = ( valor : number ) : void => {
    setFoto( valor ); 
  }

  return (
    <div className="App">
      <h1>Soy App</h1>
      <h1>{ foto }</h1>
      <button onClick={ aumentar }>Aumentar</button>
      <button onClick={ () : void => { ponerFoto(2) } }>Poner Foto</button>
      <Componente1 nombre={'Pepe'}></Componente1>
    </div>
  )
}

export default App;
