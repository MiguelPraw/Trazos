
const getCharacter = ( param ) => {

    return new Promise ( (resolve, reject) => {
        fetch ( `https://rickandmortyapi.com/api/character/${param}` ).then( respuesta => {
            return respuesta.json();
        }).then( datos => {
            resolve(datos);
        }).catch ( error => {
            reject(error);
        })
    });

}

const deleteCharacter = () => {

}

const API = {
    getCharacter, deleteCharacter
}

export default API;