import useFetch from './../../Hooks/useFetch';

const Todos = ({}) => {

    const { status , datos } = useFetch('/todos');

    return (
        <div className="Todos">
            <h1>Todos</h1>
            {
                status 
                ? datos.map( cadaTodo => {
                    return (
                        <div key={ cadaTodo.id }>
                            <p>{ cadaTodo.title }</p>
                        </div>
                    )
                })
                : <p>Cargando</p>
            }
        </div>
    )
}

export default Todos;