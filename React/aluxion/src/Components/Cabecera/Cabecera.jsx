import { useState } from "react";
import { Header , Wrapper , Empresa , Icono , Boton , Desplegable , Menu , Elemento , ContainerImagenes } from "../Components.styled";

const Cabecera = ({}) => {

    const [ desplegado , setDesplegado ] = useState(false);

    const cambiaDesplegado = () => {
        setDesplegado( !desplegado );
    }

    const listaMenu = [
        { 
          nombre : "Collection", 
          elementos : [ 
            { nombre : "Furniture"  , src : "../../../assets/sofa_blanco.png" },
            { nombre : "Lighting"   , src : "../../../assets/sofa_blanco.png" },
            { nombre : "Accesories" , src : "../../../assets/sofa_blanco.png" }
          ]
        },
        { 
          nombre : "Design", 
          elementos : [
            { nombre : "Furniture" , src : "" } 
          ] 
        },
        { 
          nombre : "Craftmanship", 
          elementos : [
            { nombre : "Furniture" , src : "" }
          ]
        },
        { 
          nombre : "Ethics", 
          elementos : [
            { nombre : "Furniture" , src : "" }
          ]
        }
      ];

    return (
        <>
            <Header>
                <Wrapper>
                    <Empresa className={ desplegado && 'desplegado'}>mater</Empresa>
                    <Boton 
                        className={ desplegado && 'desplegado'}
                        onClick={ cambiaDesplegado }>
                        <Icono className={ desplegado && 'desplegado'} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
                        </Icono>
                    </Boton>
                </Wrapper>
            </Header>
            <Desplegable className={ desplegado && 'desplegado'}>
                <Wrapper>
                    <Menu>
                        {
                            listaMenu.map( ( cadaItem , i ) => {
                                return(
                                    <Elemento key={ i }>
                                        { cadaItem.nombre }
                                    </Elemento>
                                )
                            })
                        }
                    </Menu>
                    
                </Wrapper>
            </Desplegable>
        </>
    )
}

export default Cabecera;