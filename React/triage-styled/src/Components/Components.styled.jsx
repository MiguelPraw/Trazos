import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    padding: 0 0 2em 0;
`

export const Seccion = styled.div`
    width: 100%;
    background-color: ${ ({ bg }) => bg || 'initial' };
    padding: ${ ({ padding }) => padding || '3rem 0' };

    &.rosa {
        background: rgba(255,45,85);
    }
    &.negro {
        background: black;
    }
    &.amarillo {
        background: rgba(255,184,0);
    }
    &.lila {
        background: rgba(112,0,255);
    }
`

export const Wrapper = styled.div`
    width: 90%;
    max-width: 950px;
    padding: ${ ({ padding }) => padding || '0' };
    margin: ${ ({ margin }) => margin || 'auto' };

    &.grid {
        display: grid;
        grid-template-columns: repeat( 3 , 1fr );
        gap: ${ ({ gap }) => gap || '0' };
    }

    &.flex {
        display: flex;
        flex-flow:       ${ ({ direction })   => direction    || 'row' }  ${ ({wrap})=> wrap || 'nowrap' };
        justify-content: ${ ({ justify })     => justify      || 'space-between' };
        align-items:     ${ ({ align })       => align        || 'flex-start' };
    }
`;

export const Imagen = styled.img`
    max-width: ${ ({ maxWidth }) => maxWidth || '40%' };
    padding: ${ ({ padding }) => padding || '0' };
    margin: ${ ({ margin }) => margin || '0' };
`

export const Bloque = styled.article`
    padding: ${ ({ padding }) => padding || '0em'};
    border-radius: 0.5rem;
    width: ${ ({ width }) => width || '100%' };

    &.inferior{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    &.columna{
        padding: 3rem 0 0 ;
    }
    &.amarillo {
        background: rgba(255,184,0);
    }
    &.negro {
        background: black;
    }
    &.lila {
        background: rgba(112,0,255);
    }
    &.blanco {
        background: white;
    }
    &.azul {
        background: rgba(0,122,255);
    }
    &.rosa {
        background: rgba(255,45,85);
    }
    &.gris {
        background: rgb(242, 242, 242);
    }
`;
export const Icono = styled.svg`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: orange;
`;
export const Titulo = styled.h2`
    color: ${ ({ color }) => color || 'black' };
    font-size: ${ ({ size }) => size || '1.5rem' };
    font-weight: 600;
    margin: 1em 0 0 0;
    hyphens: initial;

    &.columna {
        font-size: 2em;
    }

    &.negro {
        color: white;
    }
    &.lila {
        color: white;
    }
    &.azul {
        color: white;
    }
    &.rosa {
        color: white;
    }
    
`;
export const Subtitulo = styled.h3`
    color: ${ ({ color }) => color || 'black' };
    font-size: 1.45em;
    font-weight: 100;
    margin: 1em 0 0 0;
    opacity: .6;
    hyphens: initial;
`

export const Parrafo = styled.p`
    font-size: 1.175em;
    hyphens: initial;
    font-weight: 200;
`

export const Lista = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;

    margin: ${ ({ margin }) => margin || '0' };
    font-size: 1.1em;
`

export const ItemFooter = styled.li`
    margin: 0 1.5em 0 0;
`