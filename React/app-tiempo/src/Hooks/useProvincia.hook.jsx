import { useEffect, useState } from "react";

export const useProvincia = ( idProvincia ) => {

    const [ datos , setDatos ] = useState({
        data    : null,
        loading : true,
        error   : null
    });

    useEffect( () => {
        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${ idProvincia }`)
        .then( res => res.json())
        .then( data => {
            setDatos({
                data,
                loading : false,
                error   : null
            });
        }).catch(
            setDatos({
                data    : null,
                loading : false,
                error   : true
            })
        );
    }, []);

    return datos;

}
