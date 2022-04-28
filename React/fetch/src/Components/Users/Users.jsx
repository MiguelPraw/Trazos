import { useState , useEffect } from "react";

const Users = ({}) => {

    const [ users , setUsers ] = useState({
        status  : false,
        data    : []
    });

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json() )
        .then( data => {
            setUsers({
                status  : true,
                data    : data 
            });
        })
    }, []);

    return (
        <div className="Users">
            {
                users.status
                ? users.data.map( cadaUser => {
                    return (
                        <p key={ cadaUser.id }>{ cadaUser.name }</p>
                    )
                })
                : <p>Cargando</p>
            }
        </div>
    )
}

export default Users;