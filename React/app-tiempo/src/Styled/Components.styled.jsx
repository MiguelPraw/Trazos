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
    padding: 2em 0;
    background: #000000cf;
    height: 90vh;
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

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const Nombre = styled.h2`
    color: white;
    font-size: 1.4em;
    width: 100%;
`

export const Fila = styled.div`
    width: 100%;
    display: flex;
    flex-flow: ${ ({ flow }) => flow || 'row nowrap' };
    justify-content: ${ ({ justify }) => justify || 'center' };
    align-items: ${ ({ align }) => align || 'center' };
    gap: 1em;
`

export const Grados = styled.span`
    color: ${ ({color}) => color || 'white' };
    font-size: 1.4em;

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

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: auto;
`