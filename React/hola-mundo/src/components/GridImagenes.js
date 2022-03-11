import { Fragment, useRef, useState } from "react";

function GridImagenes () {

    const [ listaImagenes, setListaImagenes ] = useState ( [
        {url: "https://picsum.photos/id/237/400/300", categoria: "naturaleza"},
        {url: "https://picsum.photos/id/238/400/300", categoria: "ciudad"},
        {url: "https://picsum.photos/id/239/400/300", categoria: "naturaleza"},
        {url: "https://picsum.photos/id/240/400/300", categoria: "ciudad"}
    ]);

    const [ categoriaSelected, setCategoriaSelected ] = useState ( "todas" );

    const addItem = () => {
        const nuevoItem = {url: "https://picsum.photos/id/240/400/300"};
        const nuevaLista = [...listaImagenes, nuevoItem];
        setListaImagenes ( nuevaLista );
    }

    const getImages = () => {
        const filtradas = listaImagenes.filter ( cadaImagen => {
            if (cadaImagen.categoria === categoriaSelected || categoriaSelected === "todas") {
                return true;
            } else {
                return false;
            }
        });
        const imagenes = filtradas.map( (cadaImagen,index) => {
            return (
                <div key={index} className="imagen">
                    <img src={cadaImagen.url}></img>
                </div>
            );
        });
        return imagenes;
    }

    const filterNaturaleza = () => {
        setCategoriaSelected('naturaleza');
    }

    const filterCiudad = () => {
        setCategoriaSelected('ciudad');
    }

    const filterTodas = () => {
        setCategoriaSelected('todas');
    }

    const filterBy = (categoria) => {
        setCategoriaSelected( categoria );
    }

    let textInput = useRef();

    const guardar = () => {
        console.log( textInput.current.value );
    }

    return (
        <Fragment>
            <h1> Grid Imágenes </h1>
            <div>
                <input ref={ textInput } type="text" />
                <button onClick={ guardar }> Guardar </button>
            </div>
            <div className="botones">
                <button onClick={addItem}> Añadir </button>
                {/* <button onClick={filterTodas}> Todas </button>
                <button onClick={filterNaturaleza}> Naturaleza </button>
                <button onClick={filterCiudad}> Ciudad </button> */}

                <button onClick={ () => { filterBy('todas') }}> Todas </button>
                <button onClick={ () => { filterBy('naturaleza') }}> Naturaleza </button>
                <button onClick={ () => { filterBy('ciudad') }}> Ciudad </button>
            </div>
            <div className="gridImagenes">
                { getImages () }
            </div>
        </Fragment>
    );

}

export default GridImagenes;