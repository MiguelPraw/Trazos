import { ThemeProvider } from 'styled-components'
import theme from './assets/theme.styled'
import GlobalStyle from './assets/global.styled'
import Primero from './Components/Primero'
import { datos , GlobalContext } from './assets/global.context'

import './App.css'

function App() {
  
  return (
    <GlobalContext.Provider value={ datos }>
      <ThemeProvider theme= { theme }>
        <GlobalStyle />
        <div className="App">
          <Primero></Primero>
        </div>
      </ThemeProvider>
    </GlobalContext.Provider>
  )

}

export default App;
