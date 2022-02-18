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

    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.tipos = [];
    }
    
    añadeTipo (tipo) {
        this.tipos.push(tipo);
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
        console.log(error);
    }
}

function actualizaPokedex (idPokemon) {
    let datosPokemon = getDatosPokemon(idPokemon);
    datosPokemon.then (datos => {
        let pokemon = new Pokemon(datos.id, datos.name);
        datos.types.forEach(tipo => {
            let idTipo = getIdTipo(tipo.type.url);
            getTiposEspañol(idTipo).then(respuesta => {
                pokemon.añadeTipo(respuesta);
            });
        });
        pokedex.añadePokemon(pokemon);
    });
    pokedex.listaPokemon.sort();
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
    console.log(pokedex);
    console.log(pokedex.listaPokemon);
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

    let resultado = getDatos();
    
    resultado.then( respuesta => {
        console.log(respuesta);

        pintaGrid (respuesta);
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