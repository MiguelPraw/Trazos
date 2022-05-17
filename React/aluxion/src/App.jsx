import theme from "./assets/theme.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/global.styled";

import Cabecera from "./Components/Cabecera/Cabecera";
import { useEffect, useState , useLayoutEffect } from "react";

import { Cuerpo , Seccion , Informacion , Autor , Descripcion , BotonDetalles , Imagen , Footer , Wrapper , Bloque , Numero , Nombre } from './Components/Components.styled'

const App = () => {

  const listaMuebles = [
    { 
      autor       : "Michael W. Dreeben",
      nombre      : "Shell Dining Chair",
      descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa architecto temporibus, ut sequi maxime culpa quia perspiciatis aperiam rem perferendis.",
      src         : "../../../assets/mesa_negra.png"
    },
    { 
      autor       : "Jeaper K. Thomas", 
      nombre      : "Dunes Anthrazite Black", 
      descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa architecto temporibus, ut sequi maxime culpa quia perspiciatis aperiam rem perferendis.", 
      src         : "../../../assets/silla_negra.png" 
    },
    { 
      autor       : "Prueba K. Prueba", 
      nombre      : "Sofá Blanco", 
      descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa architecto temporibus, ut sequi maxime culpa quia perspiciatis aperiam rem perferendis.", 
      src         : "../../../assets/sofa_blanco.png" 
    },
  ];

  // let ruedaActiva = true;

  const [ muebleActivo , setMuebleActivo ] = useState(0);

  // useEffect( () => {
  //   document.addEventListener( 'wheel' , ( e ) => {
  //     console.log( e.deltaY )
  //     (e.deltaY < 0) ? setMuebleActivo( muebleActivo - 1) : setMuebleActivo(muebleActivo + 1);
  //   })
  // }, []);

  const setAltura = () => {
    let desplazamiento = (100 / listaMuebles.length) * muebleActivo;
    return `translateY(-${desplazamiento}%)`;
  }

  const cambiaActivo = ( valor ) => {
    setMuebleActivo( valor );
  }

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Cabecera />
      <Cuerpo>
        <Wrapper 
          style={ {
            'transform' : setAltura()
          } }
          flow="column" 
          justify="flex-start">
          {
            listaMuebles.map( ( cadaMueble , i ) => {
              return (
                <Seccion key={ i } className={ ( i === muebleActivo ) && 'activo' }>
                  <Informacion>
                    <Autor>{ cadaMueble.autor }</Autor>
                    <Nombre weight="bold">{ cadaMueble.nombre }</Nombre>
                    <Descripcion>{ cadaMueble.descripcion }</Descripcion>
                    <BotonDetalles>Product Details</BotonDetalles>
                  </Informacion>
                  <Imagen src={ cadaMueble.src } />
                </Seccion>
              )
            })
          }
        </Wrapper>
      </Cuerpo>
      <Footer>
        <Wrapper justify="flex-start">
          {
            listaMuebles.map( ( cadaMueble , i ) => {
              return (
                <Bloque 
                  key={ i }
                  onClick={ () => cambiaActivo( i ) } 
                  className={ ( i === muebleActivo) && 'activo' }>
                    <Numero className={ ( i === muebleActivo) && 'activo' }>0{ i + 1 }</Numero>
                    <Nombre className={ ( i === muebleActivo) && 'activo' } size="1em">{ cadaMueble.nombre }</Nombre>
                </Bloque>
              )
            })
          }
        </Wrapper>
      </Footer>
    </ThemeProvider>
  )
}

export default App;