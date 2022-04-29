/* Globals */
import { datos , GlobalContext } from './assets/global.context';
import { ThemeProvider } from 'styled-components';
import { theme , GlobalStyle } from './assets/global.styled';
/* Routing */
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

/* Pages */
import Inicio from './Pages/Inicio';
import Restaurante from './Pages/Restaurante';
import Manager from './Pages/Manager';
import Cabecera from './Components/Cabecera';

const App = () => {

  return (

      <ThemeProvider theme={ theme }>
        <GlobalStyle />
          <GlobalContext.Provider value={ datos }>
            <div className="App">
              
              <Router>
                <Cabecera />
                <Routes>
                  <Route path="/"             element={ <Inicio />      } />
                  <Route path="/restaurante"  element={ <Restaurante /> } />
                  <Route path="/manager"      element={ <Manager />     } />
                </Routes>
              </Router>

            </div>
          </GlobalContext.Provider>
      </ThemeProvider>

  )
}

export default App;
