console.clear()

const { user , password } = require( 'dotenv' ).config().parsed;

const express = require('express');
const app     = express();
const { router }  = require('./router/router.js');
const cors    = require( 'cors' );
const helmet  = require( 'helmet' );
const morgan  = require( 'morgan' );

const mongoose = require('mongoose');

const conectar = async () => {
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.2bofw.mongodb.net/Filmin?retryWrites=true&w=majority`) , {
        useNewUrlParser     : true,
        useUnifiedTopology  : true,
    } , () => {
        console.log(" Conexión con MongoDB ");
    }
}

conectar();

app.use( cors() );
app.use( helmet() );
app.use( morgan('tiny') );
app.use( express.json() );
app.use( express.urlencoded( { extended : false } ));
app.use( router );

app.listen(5000 , () => {
    console.log('Iniciando App');
});