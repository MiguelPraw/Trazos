import logo from './logo.svg';
import './App.scss';
import { Fragment } from 'react';
import Saludo from './components/Saludo';
import Contador from './components/Contador';
import Modal from './components/Modal';
import Slider from './components/Slider';
import Alumnos from './components/Alumnos';
import Footer from './components/Footer';
import GridImagenes from './components/GridImagenes';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <nav className="menu">
            <Link to="/"> Home </Link>
            <Link to="/grid"> Grid </Link>
            <Link to="/alumnos"> Alumnos </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Contador/>}></Route>
            <Route path="/grid" element={<GridImagenes/>}></Route>
            <Route path="/alumnos" element={<Alumnos/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
    // <Fragment>
    //   <div className="App">
    //     <h1>Hola Mundo React</h1>
    //     {/* <Saludo></Saludo> */}
    //     {/* <Contador></Contador> */}
    //     {/* <Modal></Modal> */}
    //     {/* <Slider></Slider> */}
    //     <GridImagenes></GridImagenes>
    //   </div>
    //   <Footer></Footer>
    // </Fragment>
  );
}

export default App;
