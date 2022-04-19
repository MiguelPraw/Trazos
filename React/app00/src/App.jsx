import './App.css'

const Logo = () => {
  return (
    <h1>Que pasa loco</h1>
  )
}

const Enlace = ( { nombre , edad , texto } ) => {
  return (
    <a>{texto}</a>
  );
}

const Subtitulo = () => {
  return (
    <h2>Puto</h2>
  )
}

const App = () => {
  return (
    <> 
      <Logo/>
      <Logo></Logo>

      <Subtitulo/>
      <Subtitulo></Subtitulo>
      
      <Enlace
        nombre = { 'Timmy' }
        edad = { 32 }
        texto = { 'Botón' }></Enlace>
    </>
  );
}

export default App;