import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { usePrimero , useSegundo , useFetch } from './Hooks/usePrimero';

const App = () => {
  
  const [ posts , setPosts ] = useState([]);

  const datos = useFetch('https://jsonplaceholder.typicode.com/posts');

  useEffect( () => {
    
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then( respuesta => {
    //   setPosts(respuesta.data);
    // });

  }, []);

  useEffect( () => {
    setPosts(datos);
  }, [ datos ]);
  
  return (
    <div className="App">
      {
        posts.map( ( cadaPost , i ) => {
          return(
            <div key={ i }>
              <p>{ cadaPost.title }</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;