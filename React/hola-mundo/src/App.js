import logo from './logo.svg';
import './App.scss';
import { Fragment } from 'react';
import Saludo from './components/Saludo';
import Modal from './components/Modal';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Contador from './components/Contador';
import Alumnos from './components/Alumnos';
import GridImagenes from './components/GridImagenes';
import ListaTareas from './components/ListaTareas';

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
            <span><Link to="/"> Home </Link></span>
            <span><Link to="/grid"> Grid </Link></span>
            <span><Link to="/alumnos"> Alumnos </Link></span>
            <span><Link to="/listaTareas"> Lista de Tareas </Link></span>
          </nav>
          <Routes>
            <Route path="/" element={<Contador/>}></Route>
            <Route path="/grid" element={<GridImagenes/>}></Route>
            <Route path="/alumnos" element={<Alumnos/>}></Route>
            <Route path="/listaTareas" element={<ListaTareas/>}></Route>
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
