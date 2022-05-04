console.clear();

/* Require Express + Middleware */
const express   = require('express');
const app       = express();
const cors      = require('cors');
const helmet    = require('helmet');
const morgan    = require('morgan');


/* Usar Middleware */

app.use( express.json() );
app.use( express.urlencoded( { extended : false } ) );
app.use( cors() );
app.use( helmet() );
app.use( morgan('tiny') );

app.use( ( req , res , next ) => {
    console.log( 'Ejecutando el Middleware' );
    next();
});

/* Endpoints */

app.get( '/:id' , ( req , res ) => {
    
    let { id } = req.params.id;
    let { nombre , apellido } = req.query;

    res
        .status(200)
        .json('Estoy haciendo GET a /');
});

app.get( '/' , ( req , res ) => {
    console.log('Estoy haciendo GET a /');
    res
        .status(200)
        .json('Estoy haciendo GET a /');
});

app.post( '/' , ( req , res ) => {

    let { nombre , apellido } = req.body;
    
    res.json('Estoy haciendo POST a /');
});

app.put( '/' , ( req , res ) => {
    res.json('Estoy haciendo PUT a /');
})

app.delete( '/' , ( req , res ) => {
    res.json('Estoy haciendo DELETE a /');
})

app.listen(5000 , () => {
    console.log("Iniciando API");
});