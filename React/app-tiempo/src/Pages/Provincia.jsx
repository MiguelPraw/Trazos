import { useParams } from "react-router-dom";
import Cabecera from "./../Components/Cabecera/Cabecera";
import PortadaProvincia from "../Components/PortadaProvincia/PortadaProvincia";

const Provincia = ({}) => {

    const { idProv } = useParams();

    return (
        <>
            <Cabecera />
            <PortadaProvincia idProv={ idProv } />
        </>
    )
}

export default Provincia;