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
    font-size: 2em;
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
    min-height: 90vh;
`

export const MainCiudad = styled.main`
    position: relative;
    width: 100%;
    min-height: 90vh;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${ ({ url }) => url || "initial" });
        background-size: cover;
        filter: brightness(0.5);
    }
`

export const Grid = styled.div`
    margin: 4em 0 0 0;
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

    transition: all .3s ease;

    &:hover {
        background: #00000052;
    }
`

export const Nombre = styled.h2`
    color: white;
    font-size: ${({ size }) => size || "1.4em"};
    text-align: ${ ({ align }) => align || "center" };
    background: ${ ({ bg }) => bg || "transparent" };
    padding: ${ ({ padding }) => padding || '0' };
    width: ${ ({ width }) => width || "auto" };
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; */

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
    gap: ${ ({ gap }) => gap || "1em" };
    padding: ${ ({ padding }) => padding || "0" };

    background: ${ ({ bg }) => bg || "transparent" };

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

export const ContainerProvincias = styled.section`
    margin: 4em 0 0 0;
`

export const ContainerProvincia = styled.section`
    margin: 4em 0 0 0;
`

export const ContainerCiudad = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 90vh;
    position: relative;
`

export const TextoH3 = styled.h3`
    color: white;
    font-size: 2em;
`

export const Provincias = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;

    gap: 1em;
    margin: 4em 0;
`

export const Provincia = styled.li`
    color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-start;

    background: black;
    padding: 1em 2em;

    transition: all .3s ease;

    &:hover {
        background: #00000052;
    }
`

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: auto;

    overflow: ${ ({ overflow }) => overflow || 'hidden' };
`