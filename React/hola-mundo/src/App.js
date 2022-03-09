import logo from './logo.svg';
import './App.scss';
import { Fragment } from 'react';
import { Saludo } from './components/Saludo';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Hola Mundo React</h1>
      </div>
      <Saludo></Saludo>
    </Fragment>
  );
}

export default App;
