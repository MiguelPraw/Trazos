import logo from './logo.svg';
import './App.scss';
import { Fragment } from 'react';
import Saludo from './components/Saludo';
import Contador from './components/Contador';
import Modal from './components/Modal';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Hola Mundo React</h1>
        {/* <Saludo></Saludo> */}
        {/* <Contador></Contador> */}
        <Modal></Modal>
        <Slider></Slider>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
