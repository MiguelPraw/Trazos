import { useEffect , useState } from "react";

const Comments = ({}) => {

    const [ comments , setComments ] = useState({
        status : false,
        data   : []
    });

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/comments')
        .then( res => res.json())
        .then( data => {
            setComments({
                status : true,
                data : data
            })
        })
    }, []);

    return (
        <div className="Comments">
            
            {
                comments.status 
                ? comments.data.map( cadaComment => {
                    return (
                        <p key={ cadaComment.id }>{ cadaComment.name }</p>
                    )
                    })
                : <p>Cargando</p>
            }
            
        </div>
    )
}

export default Comments;