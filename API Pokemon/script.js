'use strict'

const URL = "https://pokeapi.co/api/v2/pokemon";

let siguienteUrl = "";
let anteriorUrl = "";
let base_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

async function getDatos () {
    try {
        let respuesta = await ((await fetch(URL)).json());
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

function pintaGrid (respuesta) {
    console.log(respuesta);
    siguienteUrl = respuesta.next;
    respuesta.results.forEach(pokemon => {
        console.log(pokemon);
        let idPokemon = getId(pokemon.url);
        pintaPokemon(pokemon.name, idPokemon);
    });
}

function pintaPokemon (nombre, id) {
    let nodoDiv = document.createElement('div');
    $(nodoDiv).addClass('pokemon').html(nombre);
    let nodoImg = $('<img/>').attr('src', `${base_img}${id}.png`);
    $(nodoDiv).append(nodoImg);
    $('#grid').append(nodoDiv);
}

function getId (url) {
    let segmento = url.split(URL + "/");
    let result = segmento[1].split("/");
    return result[0];
}

let resultado = getDatos();
resultado.then( respuesta => {
    pintaGrid (respuesta);
    if (anteriorUrl === "") {
        $('#btnPrev').prop('disabled', true);
    }
});

$('#btnPrev').on({
    click: function () {

    }
});

$('#btnNext').on({
    click: function () {

    }
});