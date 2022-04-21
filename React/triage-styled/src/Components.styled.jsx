import styled from 'styled-components';

export const Seccion = styled.div`
    width: 100%;
    background-color: ${ ({ bg }) => bg || 'initial' };
    
    padding: ${ ({ padding }) => padding || '2rem 0' };
`

export const Wrapper = styled.div`

    width: 90%;
    max-width: 950px;
    margin: auto;

    &.grid {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        gap: 1rem;
    }
    &.flex {
        display: flex;
        flex-flow:       ${ ({ direction }) => direction || 'row' } nowrap;
        justify-content: ${ ({ justify})    => justify   || 'space-between' };
        align-items:     ${ ({ align })     => align     || 'center' };
    }

`