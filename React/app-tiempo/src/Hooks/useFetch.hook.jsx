import { useEffect, useState } from "react";

export const useFetch = ( endpoint ) => {
    
    const [ datos , setDatos ] = useState({
        data    : null,
        loading : true,
        error   : null
    });

    useEffect( () => {
        fetch(`https://www.el-tiempo.net/api/json/v2/${ endpoint }`)
        .then( res => res.json() )
        .then( data => {
            setDatos( {
                data,
                loading : false,
                error   : null
            } );
        }).catch(
            setDatos({
                data    : null,
                loading : false,
                error   : "No encontado"
            })
        );
    }, []);

    return datos;
}

export const useFetchCiudad = ( idProvincia , idMunicipio ) => {

    const [ datos , setDatos ] = useState({
        data    : null,
        loading : true,
        error   : null
    });

    useEffect( () => {
        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${idProvincia}/municipios/${idMunicipio}`)
        .then( res => res.json())
        .then( data => {
            setDatos({
                data,
                loading : false,
                error   : null
            })
        }).catch(
            setDatos({
                data    : null,
                loading : false,
                error   : "No encontado"
            })
        );
    }, []);
    
    return datos;
}