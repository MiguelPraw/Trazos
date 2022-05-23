import { useParams } from "react-router-dom";
import Cabecera from "../Components/Cabecera/Cabecera";
import PortadaMunicipio from "../Components/PortadaMunicipio/PortadaMunicipio";

const Municipio = ({}) => {

    const { idProv , idMun } = useParams();

    return (
        <>
            <Cabecera />
            <PortadaMunicipio idProvincia={ idProv } idMunicipio={ idMun } />
        </>
    )

}

export default Municipio;