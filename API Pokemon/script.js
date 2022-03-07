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
    descripcion;
    peso;
    altura;
    tipos;
    habilidades;
    sprite;
    spriteShiny;
    spriteOficial;
    spriteHome;
    spriteHomeShiny;
    nodoHtml;

    constructor(id, nombre, peso, altura, sprite, spriteShiny, spriteOficial, spriteHome, spriteHomeShiny) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = "";
        this.peso = this.calculaPeso(peso);
        this.altura = this.calculaAltura(altura);
        this.tipos = [];
        this.habilidades = [];
        this.sprite = sprite;
        this.spriteShiny = spriteShiny;
        this.spriteOficial = spriteOficial;
        this.spriteHome = spriteHome;
        this.spriteHomeShiny = spriteHomeShiny;
        this.nodoHtml = "";
    }

    añadeDescripcion (descripcion) {
        this.descripcion = descripcion;
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

    calculaPeso (peso) {
        return (peso / 10) + " kg";
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

function devuelveDescripcionEspañol (url, pokemon) {
    return new Promise ((resolve, reject) => {
        fetch (url).then( respuesta => {
            return respuesta.json();
        }).then ( datos => {
            //console.log(datos);
            let descripcion = datos["flavor_text_entries"].filter ( elemento => elemento.language.name === "es");
            console.log();
            resolve (descripcion[descripcion.length-1].flavor_text);
        }).catch ( error => {
            reject ( error );
        });
    });
}

function devuelveHabilidadesEspañol (arrayHabilidades, pokemon) {
    return new Promise ((resolve, reject) => {
        let contHabilidades = 0;
        arrayHabilidades.forEach( habilidad => {
            let url = habilidad.ability.url;
            fetch(url).then( respuesta => {
                return respuesta.json();
            }).then (datos => {
                //console.log(datos);
                contHabilidades++;
                let descripcionEspañol = datos["flavor_text_entries"].find ( elemento => elemento.language.name === "es" && elemento.version_group.name === "sword-shield");
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
                reject ( error );
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
            // console.log(datos.abilities);
            let pokemon = new Pokemon (datos.id, datos.name, datos.weight, datos.height,
                 datos.sprites.front_default, datos.sprites.front_shiny,
                 datos.sprites.other['official-artwork'].front_default,
                 datos.sprites.other.home.front_default, datos.sprites.other.home.front_shiny);
            devuelveTiposPokemon (datos.types, pokemon).then ( respuesta => {
                pokemon = respuesta;
                devuelveHabilidadesEspañol (datos.abilities, pokemon).then ( respuesta => {
                    pokemon = respuesta;
                    devuelveDescripcionEspañol (datos.species.url, pokemon).then ( respuesta => {
                        pokemon.añadeDescripcion(respuesta);
                        resolve (pokemon);
                    });
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
            $('.nombre__pokemon').html(pokemon.nombre);
            $('.imagenPokemon').empty();
            $('.descripcion__pokemon').empty();
            let nodoSprite = $('<img/>').addClass('sprite').attr('src', pokemon.sprite);
            $('.imagenPokemon').append(nodoSprite);
            let nodoSelect = $('<select/>').attr('id', 'selectSprite');
            nodoSelect.append($('<option/>').val('Normal').html('Normal').attr('selected', true));
            nodoSelect.append($('<option/>').val('Shiny').html('Shiny'));
            nodoSelect.append($('<option/>').val('Home Normal').html('Home Normal'));
            nodoSelect.append($('<option/>').val('Home Shiny').html('Home Shiny'));
            $('.imagenPokemon').append(nodoSelect);

            $(nodoSelect).on({
                change: function () {
                    switch (this.value) {
                        case "Normal":
                            $(nodoSprite).attr('src', pokemon.sprite);
                        break;
                        case "Shiny":
                            $(nodoSprite).attr('src', pokemon.spriteShiny);
                        break;
                        case "Home Normal":
                            $(nodoSprite).attr('src', pokemon.spriteHome);
                        break;
                        case "Home Shiny":
                            $(nodoSprite).attr('src', pokemon.spriteHomeShiny);
                        break;
                        default:
                            console.log("FALLO");
                        break;
                    }
                }
            });

            $('.descripcion__pokemon').html(pokemon.descripcion);
            $('.altura__pokemon').html("Altura: " + pokemon.altura);
            $('.peso__pokemon').html("Peso: " + pokemon.peso);
            $('.habilidades__pokemon').empty();
            pokemon.habilidades.forEach ( habilidad => {
                let nodoDiv = $('<div/>').addClass('habilidad');
                let nodoHabilidad = $('<span/>').addClass('habilidad__nombre').html(habilidad.nombre);
                let nodoDescripcion = $('<span/>').addClass('habilidad__descripcion').html(habilidad.descripcion);
                $(nodoDiv).append(nodoHabilidad).append(nodoDescripcion);
                $('.habilidades__pokemon').append(nodoDiv);
            });
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
    });
}

iniciaPokedex();

$('.modal').on({
    click: function (evento) {
        evento.preventDefault();
        if (evento.target === $('.modal')[0]) {
            $('.modal').removeClass('activo');
        }
    }
});

let buscando = false;

$(window).on({
    scroll: function () {
        let topScroll = Math.round($(this).scrollTop());
        let gridHeight = Math.round($('#grid').height());
        let windowHeight = Math.round($(window).height());

        let recorrido = topScroll + windowHeight;
        
        if (recorrido >= gridHeight && !buscando) {
            buscando = true;
            let resultadoConsulta = getDatos (siguienteUrl);
            resultadoConsulta.then (respuesta => {
                console.log(respuesta);
                actualizaPokedex (respuesta).then( () => {
                    buscando = false;
                    console.log(pokedex);
                    ordenaPokedex();
                    $('#grid').empty();
                    pokedex.listaPokemon.forEach (pokemon => {
                        pintaPokemon (pokemon);
                    });
                });
            });
        }
    }
});