import { useState, useEffect } from "react";

const Posts = ({}) => {

    const [ posts , setPosts ] = useState({
        status  : false,
        data    : []
    });

    useEffect( () => {



        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )
        .then( data => {
            setPosts( {
                status  : true,
                data    : data
            } )
        });

    }, []);

    return (
        <div className="Posts">
            
            {
                posts.status 
                ?   posts.data.map( cadaPost => {
                        return (
                            <div key={ cadaPost.id }>
                            <p>{ cadaPost.title }</p>
                        </div>
                        )
                    })
                : <p>Cargando Posts</p>
            }
        </div>
    )
}

export default Posts;