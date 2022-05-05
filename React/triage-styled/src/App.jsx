import { ThemeProvider } from "styled-components";
import theme from './assets/theme.styled'
import GlobalStyle from "./assets/global.styled";
import { Seccion, Wrapper, Bloque, Icono, Titulo, Subtitulo, Imagen, Parrafo, Footer, Lista, ItemFooter } from "./Components/Components.styled";
import Svg from "./Components/Svg";
import Banner from './Components/Banner/Banner'

const App = () => {

  const specs = [
    { id : 0 , icono : '#' , titulo : 'Works with Gmail, iCloud & IMAP'         , class : 'azul' },
    { id : 1 , icono : '#' , titulo : 'All processing happens on device'        , class : 'amarillo' },
    { id : 2 , icono : '#' , titulo : 'Your data is yours to stay'              , class : 'rosa' },
    { id : 3 , icono : '#' , titulo : 'Supports dark mode'                      , class : 'negro' },
    { id : 4 , icono : '#' , titulo : 'Free to use. Or pay for more features.'  , class : 'lila' },
    { id : 5 , icono : '#' , titulo : 'Built & maintained by indie developers'  , class : 'blanco' },
  ];

  const cabecera = {
    id : 0 , 
    iconoSup : 'https://triage.cc/hero.svg' , 
    titulo : 'Triage is first aid for your inbox.' , 
    subtitulo : 'Everything you loved about the original Triage is back - only better. Download Triage 2 on the App Store today.',
    img : 'https://triage.cc/screenshots/hero.png',
    icono : 'https://triage.cc/download.svg'
  }

  const banners = [
    { id : 0 , icono : '#' , titulo : 'Drag left to archive'  , subtitulo : 'Unread messages appear in a stack of cards, like this.'  , img : 'https://triage.cc/screenshots/archive.png' , clase : 'rosa' },
    { id : 1 , icono : '#' , titulo : 'Drag right to keep'    , subtitulo : 'Or create your own custom workflow.'                     , img : 'https://triage.cc/screenshots/keep.png'    , clase : 'negro' },
    { id : 2 , icono : '#' , titulo : 'Tap to expand'         , subtitulo : 'Open the message to view the whole thread.'              , img : 'https://triage.cc/screenshots/expand.png'  , clase : 'amarillo' },
    { id : 3 , icono : '#' , titulo : 'Reply in context'      , subtitulo : 'Send a quick reply without leaving the app.'             , img : 'https://triage.cc/screenshots/reply.png'   , clase : 'lila' },
  ];

  const praise = [
    { id : 0 , texto : 'Since I’ve been using Triage, I’m more caught up on my email than I have been in years.' , img : 'https://triage.cc/logos/daring-fireball.png' },
    { id : 1 , texto : 'If you are constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.' , img : 'https://triage.cc/logos/the-verge.png' },
    { id : 2 , texto : 'Triage makes it feel seamless, and even fun, to achieve — if not Inbox Zero — at least Inbox Zen.' , img : 'https://triage.cc/logos/macworld.svg' },
    { id : 3 , texto : 'Triage provides the first aid necessary to get your inbox back in fighting shape.' , img : 'https://triage.cc/logos/maclife.png' },
    { id : 4 , texto : 'Triage is a boon to those who have struggled to keep their inboxes clean and organized.' , img : 'https://triage.cc/logos/clean-email.png' },
    { id : 5 , texto : 'Triage is my new favorite email app for iPhone.' , img : 'https://triage.cc/logos/macstories.png' },
  ];

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <div className="App">
        <Seccion bg="rgba(0,122,255)" padding="5rem 0 0 0">
          <Wrapper className="flex">
              <Bloque className="columna" width="40%">
                  <Imagen maxWidth="20%" src={ cabecera.iconoSup } />
                  <Titulo color="white" size="2.5rem">{ cabecera.titulo }</Titulo>
                  <Subtitulo color="white">{ cabecera.subtitulo }</Subtitulo>
                  <Imagen margin="1em 0 0 0" src={ cabecera.icono } />
              </Bloque>
              <Imagen src={ cabecera.img } />
          </Wrapper>
        </Seccion>
        {
          banners.map( ( banner , i ) => {
            return (
              <Banner key={ banner.id } banner={ banner } posicion={ i } />
            )
          })
        }
        <Seccion bg="rgb(242, 242, 242)">
          <Wrapper className="grid" gap="2rem">
            {
              specs.map( ( spec => {
                return(
                  <Bloque key={ spec.id } className={ spec.class } padding="2em">
                    <Icono></Icono>
                    <Titulo className={ spec.class }>{ spec.titulo }</Titulo>
                  </Bloque>
                );
              }))
            }
          </Wrapper>
        </Seccion>
        <Seccion>
          <Wrapper className="flex">
            <Titulo>Praise for Triage 1</Titulo>
          </Wrapper>
          <Wrapper className="grid" gap="2rem" margin="3rem auto">
            {
              praise.map( cadaPraise => {
                return (
                  <Bloque key={ cadaPraise.id } className="inferior gris" padding="2em">
                    <Parrafo>{ cadaPraise.texto }</Parrafo>
                    <Imagen src={ cadaPraise.img } margin="1em 0 0 0" maxWidth="50%"></Imagen>
                  </Bloque>
                )
              })
            }
          </Wrapper>
        </Seccion>
        <Footer>
          <Lista>
            <ItemFooter>FAQ</ItemFooter>
            <ItemFooter>Privacy</ItemFooter>
            <ItemFooter>Terms</ItemFooter>
            <ItemFooter>Security</ItemFooter>
          </Lista>
          <Lista margin="1.5em 0 0 0">
            <ItemFooter>
              <Svg nombre={"mail"} />
            </ItemFooter>
            <ItemFooter>
              <Svg nombre={"twitter"} />
            </ItemFooter>
          </Lista>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;