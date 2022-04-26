import './App.scss'
import Componente1 from './Components/Componente1/Componente1';
import Componente2 from './Components/Componente2/Componente2';
import Slider from './Components/Slider/Slider';

const App = () => {

  const imagenes = [
    { id : 0 , src : '#' , alt : 'Imagen' },
    { id : 1 , src : '#' , alt : 'Imagen' },
    { id : 2 , src : '#' , alt : 'Imagen' },
    { id : 3 , src : '#' , alt : 'Imagen' },
    { id : 4 , src : '#' , alt : 'Imagen' },
    { id : 5 , src : '#' , alt : 'Imagen' },
  ]

  return (
    <div className="App">
      <h1>Hooks</h1>

      {/* <Componente1 /> */}
      {/* <Componente2 /> */}
      <Slider listaImg={imagenes}/>
      
    </div>
  )
}

export default App;