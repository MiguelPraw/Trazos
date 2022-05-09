import { useEffect, useState } from "react"


export const useFetch = ( endpoint = '' ) => { 

    const base_api = 'http://localhost:5000'

    const [clase, setClase] = useState([])

    useEffect(()=>{
        fetch( `${ base_api }/${ endpoint }`)
        .then( res => res.json() )
        .then( data => {
            setClase( data.data )
        })
    } ,[])

    return clase
}

