
interface IProps { nombre : string };

const defaultProps = {
    nombre : '',
    edad : 0
}

// type TProps = { nombre : string };

type TProps = { nombre : string , edad : number } & typeof defaultProps;

const Componente1 = ( { nombre } : TProps ) : JSX.Element => {
    return (
        <div>
            { nombre }
        </div>
    )
}

Componente1.defaultProps = defaultProps;

export default Componente1;