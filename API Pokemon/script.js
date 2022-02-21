'use strict'

const URL = "https://pokeapi.co/api/v2/pokemon";

class Pokedex {
    listaPokemon;

    constructor() {
        this.listaPokemon = [];
    }

    añadePokemon(pokemon) {
        this.listaPokemon.push(pokemon);
    }
}

class Pokemon {
    id;
    nombre;
    tipos;
    sprite;
    nodoHtml;

    constructor(id, nombre, sprite) {
        this.id = id;
        this.nombre = nombre;
        this.tipos = [];
        this.sprite = sprite;
        this.nodoHtml = "";
    }
    
    añadeTipo (tipo) {
        this.tipos.push(tipo);
    }

    actualizaNodoHtml (html) {
        this.nodoHtml = html;
    }
}

let pokedex = new Pokedex ();

let siguienteUrl = "";
let anteriorUrl = "";
let base_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let base_tipo = "https://pokeapi.co/api/v2/type";


function getIdPokemon (url) {
    let segmento = url.split(URL + "/");
    let result = segmento[1].split("/");
    return result[0];
}

function getIdTipo (url) {
    let split = url.split("/");
    return split[split.length - 2];
}

async function getDatos () {
    try {
        let respuesta = await ((await fetch(URL)).json());
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

async function getDatosPokemon (id) {
    try {
        let respuesta = await ((await fetch(URL+"/"+id)).json());
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

async function getTiposEspañol (id) {
    try {
        let urlTipo = base_tipo + "/" + id + "/";
        let respuesta = await ((await fetch(urlTipo)).json());
        let tipoEspañol = respuesta.names.find ( elemento => elemento.language.name === "es");
        return tipoEspañol.name;
    } catch (error) {
        console.log(error.message);
    }
}

function actualizaPokedex (idPokemon) {
    let datosPokemon = getDatosPokemon(idPokemon);
    datosPokemon.then (datos => {
        //console.log(datos.sprites.other);
        let pokemon = new Pokemon(datos.id, datos.name, datos.sprites.front_default);
        datos.types.forEach(tipo => {
            let idTipo = getIdTipo(tipo.type.url);
            getTiposEspañol(idTipo).then(respuesta => {
                pokemon.añadeTipo(respuesta);
            });
        });
        pokedex.añadePokemon(pokemon);
        //pintaPokemon2(pokemon);
        pokedex.listaPokemon.sort( function (a, b) {
            if (a.id < b.id) {
                return -1;
            } else if (a.id > b.id) {
                return 1;
            } else {
                return 0;
            }
        });
    });
}

function actualizaPokedex2 (respuesta) {
    return new Promise ((resolve, reject) => {
        siguienteUrl = respuesta.next;
        respuesta.results.forEach(pokemon => {
            //console.log(pokemon);
            let idPokemon = getIdPokemon(pokemon.url);
            let datosPokemon = getDatosPokemon(idPokemon);
            datosPokemon.then (datos => {
                //console.log(datos.sprites.other);
                let pokemon = new Pokemon (datos.id, datos.name, datos.sprites.front_default);
                datos.types.forEach(tipo => {
                    let idTipo = getIdTipo(tipo.type.url);
                    getTiposEspañol(idTipo).then(respuesta => {
                        pokemon.añadeTipo(respuesta);
                    });
                });
                pokedex.añadePokemon(pokemon);
                //pintaPokemon2(pokemon);
                pokedex.listaPokemon.sort( function (a, b) {
                    if (a.id < b.id) {
                        return -1;
                    } else if (a.id > b.id) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            });
            console.log(pokedex);
            resolve(pokedex);
        });
        //console.log(pokedex);
        //resolve(pokedex);
    });
}

function pintaGrid (respuesta) {
    //console.log(respuesta);
    siguienteUrl = respuesta.next;
    respuesta.results.forEach(pokemon => {
        //console.log(pokemon);
        let idPokemon = getIdPokemon(pokemon.url);
        actualizaPokedex (idPokemon);
        pintaPokemon(pokemon.name, idPokemon);
    });
    //pintaPokemon2(pokedex.listaPokemon[0]);
}

function pintaPokemon2 (pokemon) {
    let nodoDiv = document.createElement('div');
    $(nodoDiv).addClass('pokemon').html(pokemon.nombre);
    let nodoImg = $('<img/>').attr('src', `${base_img}${pokemon.id}.png`);
    $(nodoDiv).append(nodoImg);
    pokemon.tipos.forEach(tipo => {
        let nodoSpan = document.createElement('span');
        nodoSpan.classList.add(tipo);
        nodoSpan.innerHTML = tipo;
        $(nodoDiv).append(nodoSpan);
    });
    $('#grid').append(nodoDiv);
}

function pintaPokemon (nombre, id) {
    let nodoDiv = document.createElement('div');
    $(nodoDiv).addClass('pokemon').html(nombre);
    let nodoImg = $('<img/>').attr('src', `${base_img}${id}.png`);
    $(nodoDiv).append(nodoImg);
    $('#grid').append(nodoDiv);
}

function iniciaPokedex () {

    let resultadoConsultaInicial = getDatos();
    
    resultadoConsultaInicial.then( respuesta => {
        console.log(respuesta);
        pintaGrid (respuesta);
        /*actualizaPokedex2(respuesta).then( datos => {
            console.log(datos);
        });*/
        if (anteriorUrl === "") {
            $('#btnPrev').prop('disabled', true);
        }
    });
}

iniciaPokedex();

$('#btnPrev').on({
    click: function () {

    }
});

$('#btnNext').on({
    click: function () {

    }
}); 


/* 

Consulto a la API
Cuando tengo el fetch -> actualizo la pokedex (me devuelve una promesa)
Cuando tengo el fetch -> pinto la lista de pokemon

*/