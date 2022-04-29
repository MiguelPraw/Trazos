import { useFetch } from "../Hooks/useFetch";

const Inicio = ({}) => {

    const datos = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log( datos );

    return (
        <div className="Inicio">
            <h2>Inicio</h2>
        </div>
    )
}

export default Inicio;