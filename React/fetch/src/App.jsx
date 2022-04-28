import { useState, useEffect } from 'react';
import './App.css';
import Albums from './Components/Albums/Albums';
import Comments from './Components/Comments/Comments';
import Photos from './Components/Photos/Photos';
import Posts from './Components/Posts/Posts';
import Todos from './Components/Todos/Todos';
import Users from './Components/Users/Users';

const App = () => {
  
  const [ posts , setPosts ] = useState([]);

  useEffect( () => {
    
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then( respuesta => {
    //   setPosts(respuesta.data);
    // });

  }, []);
  
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
      {/* <Posts /> */}
      <Albums />
      {/* <Comments /> */}
      <Photos />
      {/* <Users /> */}
      <Todos />
    </div>
  )
}

export default App;