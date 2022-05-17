import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styled/global.styled';
import theme from './Styled/theme.styled';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';

const App = () => {


  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path='/' element={ <Inicio /> }/>
        </Routes>
      </Router>

    </ThemeProvider>
  )
}

export default App;
