import { useEffect, useState } from "react"

export const useMunicipios = ( idProvincia ) => {

    const [ datos , setDatos ] = useState({
        dataMunicipios : null,
        loading : true,
        error : null
    });

    useEffect( () => {

        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${idProvincia}/municipios`)
        .then( res => res.json())
        .then( dataMunicipios => {
            setDatos({
                dataMunicipios,
                loading : false,
                error: null
            })
        } )
    }, []);

    return datos;
}
