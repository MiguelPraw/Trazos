import styled from 'styled-components';

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
    margin: auto;
    padding: ${ ({ padding }) => padding || '0' };

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
    max-width: 40%;
    padding: ${ ({ padding }) => padding || '0'};
`

export const Bloque = styled.article`
    padding: ${ ({ padding }) => padding || '0em'};
    border-radius: 0.5rem;

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
`;
export const Icono = styled.svg`
    width: 2rem;
    height: 2rem;
    background: orange;
`;
export const Titulo = styled.h2`
    color: ${ ({ color }) => color || 'black' };
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1em 0 0 0;

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
`