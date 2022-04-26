import Banner from './Components/Banner/Banner'

const App = () => {

  const items = [
    { id : 0 , nombre : "ZPump Urban Fit"  , marca : "Reebok"            , fondo : "../../assets/zpump.jpg"            },
    { id : 1 , nombre : "Coach2o"          , marca : "Font Vella"        , fondo : "../../assets/coach2o.jpg"          }, 
    { id : 2 , nombre : "RCar"             , marca : "Revista Car"       , fondo : "../../assets/coche.jpg"            }, 
    { id : 3 , nombre : "Emotional Pulse"  , marca : "Seidor"            , fondo : "../../assets/señor.jpg"            }, 
    { id : 4 , nombre : "Alhambra"         , marca : "Cervezas Alhambra" , fondo : "../../assets/cervezaAlhambra.jpg"  }, 
    { id : 5 , nombre : "Actimel"          , marca : "Danone"            , fondo : "../../assets/actimel.jpg"          }, 
    { id : 6 , nombre : "ffuuss"           , marca : "OT'S Group"        , fondo : "../../assets/movil.jpg"            }, 
    { id : 7 , nombre : "Delicious"        , marca : "Día"               , fondo : "../../assets/DElicious.jpg"        }, 
    { id : 8 , nombre : "Roca"             , marca : "Sanitarios"        , fondo : "../../assets/roca.jpg"             }, 
    { id : 9 , nombre : "Deep State"       , marca : "Fox"               , fondo : "../../assets/deepState.jpg"        }
  ];
  
  return (
    <div className="App">
      <Banner items={ items }/>
    </div>
  )
}

export default App;