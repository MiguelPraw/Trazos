import { useState } from "react";
import { Menu , Elemento , ContainerImagenes , ImagenMenu , SubMenu , SubElemento } from './../Components.styled'

const Navegador = ({ desplegado }) => {

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
    
    const listaImagenes = [
        { nombre : "Furniture"  , src : "../../../assets/sofa_blanco.png" },
        { nombre : "Lighting"   , src : "../../../assets/sofa_blanco.png" },
        { nombre : "Accesories" , src : "../../../assets/sofa_blanco.png" }
    ];

    const [ muebleActivo , setMuebleActivo ] = useState( -1 );
    const [ subMenuActivo , setSubMenuActivo ] = useState( -1 );

    const cambiaSubMenu = ( valor ) => {
        setSubMenuActivo( valor );
    }

    const cambiaMuebleActivo = ( valor ) => {
        setMuebleActivo( valor );
    }

    return (
        <>
            <Menu>
                {
                    listaMenu.map( ( cadaItem , i ) => {
                        return(
                            <>
                                <Elemento 
                                    onMouseEnter={ () => cambiaSubMenu( i ) }
                                    className={ desplegado && 'desplegado'} key={ i }>
                                    { cadaItem.nombre }
                                </Elemento>
                                <SubMenu className={ ( subMenuActivo === i ) && 'ver' }>
                                    {
                                        cadaItem.elementos.map( ( cadaElemento , index ) => {
                                            return (
                                                <SubElemento 
                                                    key={ index }
                                                    onMouseEnter={ () => cambiaMuebleActivo( index ) }
                                                    onMouseLeave={ () => cambiaMuebleActivo( -1 ) }>
                                                    { cadaElemento.nombre }
                                                </SubElemento>
                                            )
                                        })
                                    }
                                </SubMenu>
                            </>
                        )
                    })
                }
            </Menu>
            <ContainerImagenes>
                {
                    listaImagenes.map( ( cadaImagen , i ) => {
                        return (
                        <ImagenMenu 
                            className={ ( muebleActivo === i ) && 'activo' }
                            key={ i } 
                            src={ cadaImagen.src }
                            position="absolute" />
                        )
                    })
                }
            </ContainerImagenes>
        </>
    )

}

export default Navegador;