import { useParams } from "react-router-dom";
import Cabecera from "../../Components/Cabecera/Cabecera";

const Trabajos = ({}) => {

    const { nombre } = useParams();
    console.log( nombre );

    return (
        <div className="Trabajos">
            <Cabecera />
            <h1>Trabajos</h1>
        </div>
    )
}

export default Trabajos;