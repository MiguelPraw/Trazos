import { useEffect, useState } from "react";

export const useProvincia = ( idProvincia ) => {

    const [ datos , setDatos ] = useState({
        dataProvincia    : null,
        loading : true,
        error   : null
    });

    useEffect( () => {

        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${ idProvincia }`)
        .then( res => res.json())
        .then( dataProvincia => {
            setDatos({
                dataProvincia ,
                loading : false,
                error   : null
            });
        }).catch( setDatos({ dataProvincia    : null, loading : false, error   : true }))
    
    }, []);

    return datos;

}
