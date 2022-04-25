import styled from "styled-components"

/* Header */
export const Header = styled.header`
    border-bottom: 1px solid ${ ({ theme }) => theme.colores.gris };
    width: 100%;
    min-height: 10vh;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;
export const Logo   = styled.h1`
    max-width: 6.25rem;
`;
export const Nav    = styled.nav`

    @media screen and (max-width: 700px) {
        display: none;
    }
`;
export const Menu   = styled.ul`
    margin: ${ ({ margin }) => margin || 0 };

    display: flex;
    flex-flow: ${ ({ direction }) => direction } nowrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
        &.Header-info{
            width: 100%;
            margin: 0;
        }
    }
`;
export const Li     = styled.li`
    margin: 0 1rem 0 0;
`;
export const Button = styled.button`
    display: none;

    @media screen and (max-width: 700px) {
        display: block;
    }
`;

/* Main */
export const Main = styled.main`
    min-height: 70vh;
    background: lightblue;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

export const Seccion = styled.section`
    flex-basis: 49%;
    background: lime;
`;

export const Titulo = styled.h2`
    background: orange;
    font-size: 2.5em;
    font-weight: 600;
    color: ${ ({ theme }) => theme.colores.negro };
`;

export const Parrafo = styled.p`
    background: gold;
    color: ${ ({ theme }) => theme.colores.gris };
`;

export const Imagen = styled.img`

    &.bicicleta {
        flex-basis: 49%;
    }

    &.icono {
        width: 4rem;
        height: 4rem;
        margin: 0 4%;
    }
`;

/* Footer */
export const Footer = styled.footer`
    min-height: 20vh;
    background: lightgrey;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

/* Globales */
export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: auto;

    display: flex;
    flex-flow       : ${ ({ direction }) => direction || 'row' } ${ ({ wrap }) => wrap || 'nowrap' };
    justify-content : ${ ({ justify }) => justify || 'space-between' };
    align-items     : ${ ({ align }) => align || 'center' };

    /* @media screen and (max-width: 700px) {
        flex-flow       : ${ ({ directionMv }) => directionMv || 'row' } ${ ({ wrapMv }) => wrapMv || 'nowrap' };
        justify-content : ${ ({ justifyMv }) => justifyMv || 'space-between' };
        align-items     : ${ ({ alignMv }) => alignMv || 'center' };
    } */

    @media screen and (max-width: 700px) {


        &.Header-wrapper {
            
        }

        &.Main-wrapper {
            flex-direction: column;
        }

        &.Footer-wrapper {
            display: grid;
            grid-template-columns: repeat( 3, 1fr );
            gap: 1rem;
        }

    }

`;
export const Enlace = styled.a`
    color: ${ ({ theme }) => theme.colores.azul };
`;
