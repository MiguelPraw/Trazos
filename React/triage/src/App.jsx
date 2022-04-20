import './App.scss'

const App = () => {

  const specs = [
    { id : 0 , icono : '#' , titulo : 'Works with Gmail, iCloud & IMAP'         , class : 'azul' },
    { id : 1 , icono : '#' , titulo : 'All processing happens on device'        , class : 'amarillo' },
    { id : 2 , icono : '#' , titulo : 'Your data is yours to stay'              , class : 'rosa' },
    { id : 3 , icono : '#' , titulo : 'Supports dark mode'                      , class : 'negro' },
    { id : 4 , icono : '#' , titulo : 'Free to use. Or pay for more features.'  , class : 'lila' },
    { id : 5 , icono : '#' , titulo : 'Built & maintained by indie developers'  , class : 'blanco' },
  ]

  return (
    <div className="App">
      <div className="Specs">
        <div className="Wrapper">
          {
            specs.map( spec => {
              return (
                <div
                  key={spec.id}
                  className={ `Specs-spec ${spec.class}` }>
                  <svg className="Specs-svg"></svg>
                  <h2 className="Specs-h2">{ spec.titulo }</h2>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;