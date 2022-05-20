import styled from "styled-components";

export const Header = styled.header`
    height: 10vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: #000000Ff;
`

export const Navegador = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export const Titulo = styled.h1`
    color: white;
`

export const Menu = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
`

export const Elemento = styled.li`
    color: white;
`

export const Main = styled.main`
    background: #000000cf;
    padding: 4em 0;
    min-height: 90vh;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    gap: .5em;
`

export const Enlace = styled.a`

`

export const Card = styled.article`
    background: black;
    padding: 1.5em;
    border-radius: 0.5rem;
    min-width: calc( 1300% / 52);
    min-height: ${ ({ minHeight }) => minHeight || '362px' };

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
`

export const Nombre = styled.h2`
    color: white;
    font-size: 1.4em;
    text-align: center;

    &.provincia {
        text-decoration: underline;
    }
`

export const NombreCiudad = styled.h3`
    color: white;
`

export const Fila = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${ ({ flow }) => flow || 'row' };
    flex-wrap: ${ ({ wrap }) => wrap || 'nowrap' };
    justify-content: ${ ({ justify }) => justify || 'center' };
    align-items: ${ ({ align }) => align || 'center' };
    gap: 1em;

    svg {
        fill: white;
    }
`

export const Grados = styled.span`
    color: ${ ({color}) => color || 'white' };
    font-size: ${ ({ size }) => size || '1.4em' };

    &.max {
        color: #ffd700;
    }

    &.min {
        color: #00f8fb;
    }
`

export const Icono = styled.svg`
    width: 4em;
    height: 4em;
    fill: white;
`

export const ContainerSlider = styled.div`
    position: relative;
    overflow-x: hidden;
    padding: 4em 0;
`

export const Slider = styled.ul`
    width: 1300%;
    position: relative;

    transition: all 1s ease;

    display: grid;
    grid-template-columns: repeat( 52 , 1fr);
    gap: .5em;
`

export const BotonFlecha = styled.button`
    position: absolute;
    top: 0;
    right: ${ ({ right }) => right || '0' };
    left: ${ ({ left }) => left || '0' };
    height: 100%;
    cursor: pointer;
    padding: 0 .5em;

    &.disabled {
        display: none;
    }

    svg{
        fill: white;
    }
`

export const ContainerCiudades = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    margin: 1em 0 0 0;
    width: 90%;
`

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: auto;

    overflow: ${ ({ overflow }) => overflow || 'hidden' };
`