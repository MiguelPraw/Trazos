import { useState , useEffect } from "react";

const useFetch = ( endpoint ) => {

    const baseUrl = 'https://jsonplaceholder.typicode.com'

    const [ datos , setDatos ] = useState({
        status  : false,
        datos   : []
    })

    useEffect( () => {
        fetch( baseUrl + endpoint )
        .then( res => res.json())
        .then( data => {
            setDatos({
                status  : true,
                datos   : data
            })
        })
        .catch( err => {
            setDatos({
                status  : true,
                ...datos,
                error   : err
            })
        })
    }, []);

    return datos;
}

export default useFetch;