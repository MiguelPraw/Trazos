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

async function getTipoEspañol (id) {
    try {
        let urlTipo = base_tipo + "/" + id + "/";
        let respuesta = await ((await fetch(urlTipo)).json());
        let tipoEspañol = respuesta.names.find ( elemento => elemento.language.name === "es");
        return tipoEspañol.name;
    } catch (error) {
        console.log(error.message);
    }
}

function devuelveDatosPokemon (idPokemon) {
    let contTipos = 0;
    return new Promise (resolve => {
        let datosPokemon = getDatosPokemon(idPokemon);
        datosPokemon.then (datos => {
            //console.log(datos.sprites.other);
            let pokemon = new Pokemon (datos.id, datos.name, datos.sprites.front_default);
            datos.types.forEach (tipo => {
                let idTipo = getIdTipo(tipo.type.url);
                getTipoEspañol(idTipo).then (respuesta => {
                    contTipos++;
                    pokemon.añadeTipo(respuesta);
                    if (contTipos >= datos.types.length) {
                        resolve (pokemon);
                    }
                });
            });
        });
    });
}

function ordenaPokedex () {
    pokedex.listaPokemon.sort( function (a, b) {
        if (a.id < b.id) {
            return -1;
        } else if (a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    });
}

function actualizaPokedex (respuesta) {
    siguienteUrl = respuesta.next;
    let cont = 0;
    return new Promise (resolve => {
        for (let i = 0; i < respuesta.results.length; i++) {
            let pokemonAPI = respuesta.results[i];
            let idPokemon = getIdPokemon(pokemonAPI.url);
            let promesaPokemon = devuelveDatosPokemon (idPokemon);
            promesaPokemon.then (pokemon => {
                pokedex.añadePokemon (pokemon);
                cont++;
                if (cont >= respuesta.results.length) {
                    resolve (pokedex);
                }
            });
        }
    });
}

function pintaPokemon (pokemon) {
    let nodoDiv = document.createElement('div');
    $(nodoDiv).addClass('pokemon');
    let nodoSpan = $('<span/>').addClass('nombre').html(pokemon.nombre);
    $(nodoDiv).append(nodoSpan);
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

function iniciaPokedex () {

    let resultadoConsultaInicial = getDatos();
    
    resultadoConsultaInicial.then( respuesta => {
        console.log(respuesta);
        actualizaPokedex (respuesta).then ( () => {
            console.log(pokedex);
            ordenaPokedex();
            pokedex.listaPokemon.forEach (pokemon => {
                pintaPokemon (pokemon);
            });
        });
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