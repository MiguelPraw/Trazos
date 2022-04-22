import { ThemeProvider } from 'styled-components'
import theme from "./assets/theme.styled";
import GlobalStyle from './assets/global.styled';
import { Wrapper, Header, Main, Footer, Logo, Enlace, Nav, Menu, Li, Seccion, Titulo, Parrafo, Imagen, Button } from './Components/Components.styled';
import Icono from './Components/Icono';

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <div className="App">

        <Header>
          <Wrapper
            direction="row"
            wrap="wrap"
            justify="space-between"
            align="center"
            className="Header-wrapper">
            <Logo>
              <Enlace>Logo</Enlace>
            </Logo>

            <Button>Menu</Button>
            
            <Menu 
              className="Header-info"
              margin="0 30% 0 0">
              <Li> <Enlace>info@empresa.com</Enlace> </Li>
              <Li> <Enlace>+34 123465789</Enlace> </Li>
            </Menu>
            
            <Nav>
              <Menu>
                <Li> <Enlace>Item</Enlace> </Li>
                <Li> <Enlace>Item</Enlace> </Li>
                <Li> <Enlace>Item</Enlace> </Li>
                <Li> <Enlace>Item</Enlace> </Li>
                <Li> <Enlace>Item</Enlace> </Li>
              </Menu>
            </Nav>

          </Wrapper>
        </Header>

        <Main>
          <Wrapper
            className="Main-wrapper">
            <Seccion>
              <Titulo>Engineering with love and passion</Titulo>
              <Parrafo>High-quality solutions for emerging and industries</Parrafo>
            </Seccion>
            <Imagen className="bicicleta" src="" alt="bisicleta"></Imagen>
          </Wrapper>
        </Main>

        <Footer>
          <Wrapper
            direction="row"
            wrap="wrap"
            align="center"
            className="Footer-wrapper">
            <Imagen className="icono" src="/assets/svgs/linkedin.svg" alt="linkedin" />
            <Imagen className="icono" src="/assets/svgs/yk.svg"       alt="yk" />
            <Imagen className="icono" src="/assets/svgs/twitter.svg"  alt="twitter" />
            <Imagen className="icono" src="/assets/svgs/fazua.svg"    alt="fazua" />
            <Imagen className="icono" src="/assets/svgs/apple.svg"    alt="apple" />
          </Wrapper>
        </Footer>
      </div>
    </ThemeProvider>
  )
}

export default App;