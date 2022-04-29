import { useContext, useState } from "react";
import { GlobalContext } from "../assets/global.context";

const Primero = ({}) => {

    const { nombre } = useContext( GlobalContext );

    const [ contador , setContador ] = useState( 0 );

    return (
        <div className="Primero">
            <h1>{ nombre }</h1>
        </div>
    )
}

export default Primero;