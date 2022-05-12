console.clear();

const express   = require('express');
const app       = express();
const cors      = require('cors');

const mongoose  = require('mongoose');
const { urlencoded } = require('express');

const conectar = async () => {
    await mongoose.connect('mongodb://localhost:27017/trazos' , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    } , () => {
        console.log("Conexion increible a MongoDB");
    });
}

conectar();

const alumnoSchema = new mongoose.Schema(
    { nombre : String , apellido : String , edad : Number }, 
    { collection : "primer_turno" , versionKey : false }
);

const Alumno = mongoose.model( 'Alumno' , alumnoSchema );

/* Middleware */

app.use( cors() );
app.use( express.urlencoded({ extended : false }) );
app.use( express.json() );

/*  */

app.get( '/' , async ( req , res ) => {

    const data = await Alumno.find();
    console.log( data );

    res.status(200).json({
        data,
        msj : 'GET en Inicio'
    });
});

app.get('/alumno/:id' , async ( req , res ) => {

    const { id } = req.params;
    console.log( id );
    /* const data = await Alumno.find( { id } ); */
    const data = await Alumno.findById( id ).catch( ( msj ) => {
        console.log( msj );
    });

    res.status(200).json({
        data,
        msj: 'Alumno encontrado'
    });
});

app.post('/alumno' , async ( req , res ) => {

    const { nombre , apellido , edad } = req.body;
    const alumno = new Alumno({ nombre , apellido , edad });
    await alumno.save();

    res.status(200).json({
        data : [],
        msj : 'Alumno insertado'
    });
});

app.put('/alumno' , async ( req , res ) => {

    const { id , ...usuario } = req.body;

    let msj = 'To bien';
    const data = await Alumno.findByIdAndUpdate( id , usuario ).catch( error => {
        msj = 'El objeto no existe';
    });

    res.status(200).json({
        data,
        msj
    });
});

app.delete( '/alumno/:id' , async ( req , res ) => {

    const { id } = req.params;

    let msj = 'Borrado pelotudo';
    const data = await Alumno.findByIdAndDelete( id ).catch( error => {
        msj = 'No existe el pelotudo';
    });

    res.status(200).json({
        data,
        msj
    });
});

app.listen( 5000 , () => {
    console.log("Iniciando API");
});