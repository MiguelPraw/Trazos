import { useState , useEffect } from "react";

export const usePrimero = () => {
    return 'Primero';
}

export const useSegundo = () => {
    return [ 'Timmy' , 'Emma' ];
}

export const useFetch = ( url ) => {

    const [ datos , setDatos ] = useState([]);

    useEffect( () => {

        fetch( url )
        .then( data => data.json() )
        .then( res => {
            setDatos(res);
        });

    }, []);

    return datos;
}