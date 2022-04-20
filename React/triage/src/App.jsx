import './App.scss'
import Banner from './Components/Banner/Banner';
import Specs from './Components/Specs/Specs';

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
    icono : '#' , 
    titulo : 'Triage is first aid for your inbox.' , 
    subtitulo : 'Everything you loved about the original Triage is back - only better. Download Triage 2 on the App Store today.',
    img : '',
  }

  const banners = [
    { id : 0 , icono : '#' , titulo : 'Drag left to archive'  , subtitulo : 'Unread messages appear in a stack of cards, like this.'  , img : 'https://triage.cc/screenshots/archive.png' , clase : 'rosa' },
    { id : 1 , icono : '#' , titulo : 'Drag right to keep'    , subtitulo : 'Or create your own custom workflow.'                     , img : 'https://triage.cc/screenshots/keep.png' , clase : 'negro' },
    { id : 2 , icono : '#' , titulo : 'Tap to expand'         , subtitulo : 'Open the message to view the whole thread.'              , img : 'https://triage.cc/screenshots/expand.png' , clase : 'amarillo' },
    { id : 3 , icono : '#' , titulo : 'Reply in context'      , subtitulo : 'Send a quick reply without leaving the app.'             , img : 'https://triage.cc/screenshots/reply.png' , clase : 'lila' },
  ];

  return (
    <div className="App">
      {
        banners.map( ( banner , i ) => <Banner key={banner.id} banner={banner} posicion={i}/>)
      }
      <Specs specs={specs}></Specs>
    </div>
  )
}

export default App;