import { ThemeProvider } from "styled-components";
import theme from './assets/theme.styled'
import GlobalStyle from "./assets/global.styled";
import { Seccion, Wrapper } from "./Components.styled";

const App = () => {

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <div className="App">
        <Seccion>
          <Wrapper>
            Elemento
          </Wrapper>
        </Seccion>
      </div>
    </ThemeProvider>
  );
}

export default App;