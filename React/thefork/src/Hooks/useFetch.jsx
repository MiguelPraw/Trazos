import { useEffect , useState } from "react"

export const useFetch = ( url ) => {

    const [ datos , setDatos ] = useState( {
        datos   : [],
        status  : false
    } );

    useEffect( () => {

        fetch( url )
        .then( res => res.json() )
        .then( data => {
            setDatos({
                status : true,
                datos  : data
            });
        })
        .catch( err => {
            setDatos({
                    ...datos,
                    error : err
            });
        })
    }, []);

    return datos;
}