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
    peso;
    altura;
    tipos;
    habilidades;
    sprite;
    spriteShiny;
    spriteOficial;
    nodoHtml;

    constructor(id, nombre, peso, altura, sprite, spriteShiny, spriteOficial) {
        this.id = id;
        this.nombre = nombre;
        this.peso = peso;
        this.altura = this.calculaAltura(altura);
        this.tipos = [];
        this.habilidades = [];
        this.sprite = sprite;
        this.spriteShiny = spriteShiny;
        this.spriteOficial = spriteOficial;
        this.nodoHtml = "";
    }
    
    añadeTipo (tipo) {
        this.tipos.push(tipo);
    }

    añadeHabilidad (habilidad) {
        this.habilidades.push(habilidad);
    }

    actualizaNodoHtml (html) {
        this.nodoHtml = html;
    }

    ordenaTipos () {
        this.tipos.sort ( function (a,b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    ordenaHabilidades () {
        this.habilidades.sort ( function (a,b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    calculaPeso () {
        
    }

    calculaAltura (altura) {
        let aux = altura / 10;
        return aux + " m";
    }
}

let pokedex = new Pokedex ();

let siguienteUrl = "";
let anteriorUrl = "";
const base_tipo = "https://pokeapi.co/api/v2/type";

function getIdPokemon (url) {
    let segmento = url.split(URL + "/");
    let result = segmento[1].split("/");
    return result[0];
}

function getIdTipo (url) {
    let split = url.split("/");
    return split[split.length - 2];
}

async function getDatos (url) {
    try {
        let respuesta = await ((await fetch(url)).json());
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

function devuelveHabilidadesEspañol (arrayHabilidades, pokemon) {
    return new Promise ((resolve) => {
        let contHabilidades = 0;
        arrayHabilidades.forEach( habilidad => {
            let url = habilidad.ability.url;
            fetch(url).then( respuesta => {
                return respuesta.json();
            }).then (datos => {
                //console.log(datos);
                contHabilidades++;
                let descripcionEspañol = datos["flavor_text_entries"].find ( elemento => elemento.language.name === "es" && elemento.version_group.name === "sword-shield");
                //console.log(descripcionEspañol["flavor_text"]);
                let habilidadEspañol = datos.names.find ( elemento => elemento.language.name === "es");
                let habilidadAux = {
                    nombre: habilidadEspañol.name,
                    descripcion: descripcionEspañol["flavor_text"]
                };
                pokemon.añadeHabilidad (habilidadAux);
                if (contHabilidades >= arrayHabilidades.length) {
                    pokemon.ordenaHabilidades();
                    resolve (pokemon);
                }
            }).catch( error => {
                console.log(error);
            });
        });
    });
}

function devuelveTiposPokemon (arrayTipos, pokemon) {
    return new Promise (resolve => {
        let contTipos = 0;
        arrayTipos.forEach (tipo => {
            let idTipo = getIdTipo(tipo.type.url);
            getTipoEspañol(idTipo).then (respuesta => {
                contTipos++;
                pokemon.añadeTipo (respuesta);
                if (contTipos >= arrayTipos.length) {
                    pokemon.ordenaTipos();
                    resolve (pokemon);
                }
            });
        });
    });
}

function devuelveDatosPokemon (idPokemon) {
    return new Promise (resolve => {
        let datosPokemon = getDatosPokemon(idPokemon);
        datosPokemon.then (datos => {
            //console.log(datos.sprites.other);
            //console.log(datos);
            let pokemon = new Pokemon (datos.id, datos.name, datos.weight, datos.height,
                 datos.sprites.front_default, datos.sprites.front_shiny,
                 datos.sprites.other['official-artwork'].front_default);
            devuelveTiposPokemon (datos.types, pokemon).then ( respuesta => {
                pokemon = respuesta;
                devuelveHabilidadesEspañol (datos.abilities, pokemon).then ( respuesta => {
                    pokemon = respuesta;
                    resolve (pokemon);
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
                    resolve ();
                }
            });
        }
    });
}

function pintaPokemon (pokemon) {
    let nodoDiv = document.createElement('div');
    $(nodoDiv).addClass('pokemon');
    let nodoImg = $('<img/>').addClass('imagen').attr('src', pokemon.spriteOficial);
    $(nodoDiv).append(nodoImg);
    let nodoNombre = $('<span/>').addClass('nombre').html(pokemon.nombre);
    $(nodoDiv).append(nodoNombre);
    let nodoNumero = $('<span/>').addClass('numero').html("Nº " + pokemon.id);
    $(nodoDiv).append(nodoNumero);
    let nodoTipos = document.createElement('div');
    nodoTipos.classList.add('tipos');
    pokemon.tipos.forEach(tipo => {
        let nodoSpan = document.createElement('span');
        nodoSpan.classList.add(tipo);
        nodoSpan.innerHTML = tipo;
        $(nodoTipos).append(nodoSpan);
    });
    $(nodoDiv).append(nodoTipos);
    $('#grid').append(nodoDiv);
    pokemon.actualizaNodoHtml(nodoDiv);

    $(nodoDiv).on({
        click: function () {
            $('.modal').addClass('activo');
            $('.imagenPokemon').empty();
            let nodoSprite = $('<img/>').addClass('sprite').attr('src', pokemon.sprite);
            $('.imagenPokemon').append(nodoSprite);
            let nodoBtn = $('<button/>').addClass('btnShiny').html('Shiny').on({
                click: function () {
                    if ($(nodoSprite).attr('src') === pokemon.sprite) {
                        $(nodoSprite).attr('src', pokemon.spriteShiny);
                    } else {
                        $(nodoSprite).attr('src', pokemon.sprite);
                    }
                }
            });
            $('.imagenPokemon').append(nodoBtn);
            let nodoNombre = $('<span/>').addClass('nombrePokemon').html(pokemon.nombre);
            $('.datosPokemon').append(nodoNombre);
        }
    });
}

function iniciaPokedex () {

    let resultadoConsultaInicial = getDatos(URL);
    
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
        let resultadoConsulta = getDatos (siguienteUrl);
        resultadoConsulta.then (respuesta => {
            console.log(respuesta);
            actualizaPokedex (respuesta).then( () => {
                console.log(pokedex);
                ordenaPokedex();
                $('#grid').empty();
                pokedex.listaPokemon.forEach (pokemon => {
                    pintaPokemon (pokemon);
                });
            });
        });
    }
}); 

$('.modal').on({
    click: function (evento) {
        evento.preventDefault();
        if (evento.target === $('.modal')[0]) {
            $('.modal').removeClass('activo');
        }
    }
});
