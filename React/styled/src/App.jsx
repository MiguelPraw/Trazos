import styled , { ThemeProvider } from 'styled-components';
import theme from './assets/theme.styled';
import GlobalStyle from './assets/global.styled';

const Etiqueta = styled.div`
  width             : ${ ({ width })            => width            || '100%'     };
  height            : ${ ({ height })           => height           || 'auto'     };
  background-color  : ${ ({ backgroundColor })  => backgroundColor  || 'initial'  };
  margin            : ${ ({ margin })           => margin           || 'auto'     };
  padding           : ${ ({ padding })          => padding          || '0'        };
  border            : ${ ({ border })           => border           || 'initial'  };
`

const Seccion = styled.div`
  width: 100%;
  padding: 2rem 0;
  background: lightgrey;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  background: orange;
  margin: auto;

  &.grid {
    display: grid;
    grid-template-columns: repeat( 3 , 1fr );
    gap: ${ ({ gap }) => gap || '0' };
  }

  &.flex {
    display: flex;
    flex-flow: ${ ({direction})=> direction || 'row' } ${ ({wrap})=> wrap || 'nowrap' };
    justify-content: ${ ({justify}) => justify || 'center' };
    align-items: ${ ({ align }) => align || 'center' };
  }
`;

const Bloque = styled.article``;
const Icono = styled.img``;
const Titulo = styled.h2`
  color: ${ ({ color }) => color || 'white' };
`;

const App = () => {

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <div className="App">
        <Seccion>
          <Wrapper className="grid" gap="2rem">
            <Bloque>
              <Icono></Icono>
              <Titulo color="red">Lorem</Titulo>
            </Bloque>
            <Bloque>
              <Icono></Icono>
              <Titulo>Lorem</Titulo>
            </Bloque>
            <Bloque>
              <Icono></Icono>
              <Titulo>Lorem</Titulo>
            </Bloque>
          </Wrapper>
        </Seccion>
      </div>
    </ThemeProvider>
  )
}

export default App;