import React from "react";

export const listaFondos = [
    {
        nombre  : "despejado",
        url     : "https://images.freeimages.com/images/large-previews/e62/clear-sky-1363026.jpg"
    },
    {
        nombre  : "lluvia",
        url     : "https://www.efeverde.com/storage/2018/11/espa%C3%B1a-lluvia.jpg"
    },
    {
        nombre  : "cubierto",
        url     : "https://www.elciudadanoweb.com/wp-content/uploads/2018/12/cielo.jpg"
    },
    {
        nombre  : "nuboso",
        url     : "https://lavozdetomelloso.com/api/mediafiles/0031653a-9e4b-42f4-b5c6-c08697ddab06"
    },
    {
        nombre  : "nuboso con lluvia escasa",
        url     : "https://fondosmil.com/fondo/65807.jpg"
    }
]

export const GlobalContext = React.createContext( listaFondos );