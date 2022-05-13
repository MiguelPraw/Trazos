import styled from 'styled-components';

export const Header = styled.header`
    height: 10vh;
    width: 100%;

    display: flex;
    align-items: center;
`

export const Cuerpo = styled.div`
    height: 75vh;
    width: 100%;
    overflow: hidden;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    height: 15vh;
    width: 100%;
    border-top: 1px solid lightgrey;
`

export const Wrapper = styled.div`

    max-width: 1200px;
    width: 80%;
    margin: auto;

    position: relative;

    display: flex;
    flex-flow: ${ ({ flow }) => flow || "row nowrap" };
    justify-content: ${ ({ justify }) => justify || 'space-between' };
    align-items: center;

    transition: all 2s ease;
    
`

export const Boton = styled.button`
    border: 1px solid lightgray;
    padding: 10px;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: all 1s ease;

    &.desplegado {
        border-color: white;
    }
`

export const Empresa = styled.h1`
    font-size: 2em;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    z-index: 2;

    transition: all 2s ease;

    &.desplegado {
        color: white;
    }
`

export const Icono = styled.svg`

    transition: all 1s ease;

    &.desplegado {
        fill: white;
    }
`

export const Desplegable = styled.div`
    width: 0;
    height: 100vh;
    position: fixed;
    background-color: black;
    z-index: 1;
    top: 0;
    left: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    transition: all 2s ease;

    &.desplegado {
        width: 100%;
        left: 0;
    }
`

export const Menu = styled.ul`

`

export const SubMenu = styled.ul`
    height: 0;
    margin-top: 1em;
    overflow: hidden;

    transition: all 1s ease;
            
    &.ver {
        height: 6em;
        opacity: 1;
    }
`

export const Elemento = styled.li`
    color: white;
    font-size: 2em;
    margin: 0.5em 0;
    cursor: pointer;
    opacity: 0;
    transform: translateY(100px);

    transition: all 1s ease 2s;

    &.desplegado {
        opacity: 1;
        transform: translateY(0);
    }
`

export const SubElemento = styled.li`
    color: lightgrey;
    margin: .5em 1em;
    cursor: pointer;
`

export const ContainerImagenes = styled.div`

`

export const Imagen = styled.img`
    width: 40%;

    @media screen and (max-width: 760px) {
        width: 60%;
    }
`

export const ImagenMenu = styled.img`
    width: 40%;
    position: ${ ({ position }) => position || 'static' };
    top: -50px;
    right: 0;
    opacity: 0;

    transition: all 0.5s ease;

    &.activo {
        opacity: 1;
    }
`

export const Seccion = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 75vh;
    opacity: 0;

    transition: all 1s ease;

    &.activo {
        opacity: 1;
    }

    @media screen and (max-width: 760px) {
        flex-flow: column-reverse;
        justify-content: center;
    }
`

export const Informacion = styled.article`
    max-width: 40%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 760px) {
        max-width: 80%;
        align-items: center;
    }
`

export const Autor = styled.h3`
    font-size: 1.2em;
`

export const Nombre = styled.h2`
    font-size: ${ ({ size }) => size || '1.5em' };
    font-weight: ${ ({ weight }) => weight || 'initial' };
    color: black;
    margin: .5em 0 0 0;

    &.activo {
        font-weight: bold;
    }
`

export const Descripcion = styled.p`
    margin: 1em 0 0 0;

    @media screen and (max-width: 760px) {
        text-align: center;
    }
`

export const BotonDetalles = styled.button`
    cursor: pointer;
    background: black;
    color: white;
    padding: 0.5em 1em;
    margin: 1em 0 0 0;

    @media screen and (max-width: 760px) {
        margin: 1em auto;
    }
`

export const Bloque = styled.div`

    margin: 0 0 0 1em;
    cursor: pointer;

    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;

    &::before {
        content: '';
        width: 0;
        height: 2px;
        display: block;
        background: black;
        transition: all 1s ease;
    }

    &.activo::before {
        width: 100%;
    }

`

export const Numero = styled.span`
    font-size: 1em;
    margin: 1em 0 0 0;

    &.activo {
        font-weight: bold;
    }
`