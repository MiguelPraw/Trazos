const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema(
    {
        "url": { "type": "String" },
        "src": { "type": "String" },
        "portada": { "type": "String" },
        "fondo": { "type": "String" },
        "titulo": { "type": "String" },
        "director": {
            "nombre": { "type": "String" },
            "url": { "type": "String" }
        },
        "genero": { "type": [ "String" ] },
        "edad": { "type": "String" },
        "hd": { "type": "Boolean" },
        "nota": { "type": "String" },
        "serie": { "type": "Boolean" },
        "suscriptores": { "type": "Boolean" },
        "alquiler": { "type": "Boolean" },
        "anio": { "type": "Number" },
        "duracion": { "type": "String" },
        "descripcion": { "type": "String" },
        "detalles": {
            "sinopsis": { "type": "String" },
            "premios": { "type": [ "Mixed" ] },
            "temas": { "type": [ "String" ] },
            "directores": { "type": [ "String" ] },
            "reparto": {
            "type": [ "String" ] },
            "audio": { "type": [ "String" ] },
            "subtitulos": { "type": [ "String" ] },
            "masInfo": {
                "tituloOriginal": { "type": "String" },
                "pais": { "type": "String" },
                "estreno": { "type": "String" },
                "recaudacion": { "type": "String" },
                "espectadores": { "type": "Number" }
            }
        }
    },
    { collection : "peliculas" , versionKey : false }
);

const sliderCabeceraSchema = new mongoose.Schema(
    { 
        inicial : Boolean, 
        video : Boolean, 
        img : String, 
        titulo : String, 
        subtitulo : String, 
        serie : Boolean,
        boton : {
            texto : String,
            href : String
        }
    },
    { collection : "slider_cabecera" , versionKey : false }
)

const sliderCategoriasSchema = new mongoose.Schema(
    { src : String },
    { collection : "slider_categorias" , versionKey : false }
)

const slidersInicioSchema = new mongoose.Schema(
    { titulo : String , subtitulo : String },
    { collection : "sliders_inicio" , versionKey : false }
)

const Pelicula          = mongoose.model( 'Pelicula'        , peliculaSchema );
const SliderCabecera    = mongoose.model( 'SliderCabecera'  , sliderCabeceraSchema );
const SliderCategorias  = mongoose.model( 'SliderCategorias', sliderCategoriasSchema );
const SlidersInicio     = mongoose.model( 'SlidersInicio'   , slidersInicioSchema );

module.exports = {
    Pelicula,
    SliderCabecera,
    SliderCategorias,
    SlidersInicio
}