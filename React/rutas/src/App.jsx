import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import Inicio from "./Pages/Inicio/Inicio";
import Trabajos from "./Pages/Trabajos/Trabajos";
import { datos, GlobalContext } from "./assets/global.context";

const App = () => {

  return (
    <GlobalContext.Provider value={ datos }>
      <Router>
        <Routes>
          <Route path="/"                 element={ <Inicio /> }/>
          <Route path="/trabajos/"        element={ <Trabajos /> }/>
          <Route path="/trabajos/:nombre" element={ <Trabajos /> }/>
          <Route path="/contacto"         element={ <h2>Contacto</h2> } />
          <Route path="/contacto/*" >
            <Route path="github"          element={ <h4>Github</h4> } />
          </Route>
        </Routes>
      </Router>
    </GlobalContext.Provider>
  )
}

export default App;