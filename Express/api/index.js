console.clear()

const express       = require('express')
const app           = express()

const { CONTRASENIA } = require('dotenv').config().parsed

console.log( CONTRASENIA );

const { router }    = require('./router/router')

const cors          = require('cors')
const helmet        = require('helmet')
const morgan        = require('morgan')
const { puerto }    = require('yargs').argv

app.use( express.json() )
app.use( express.urlencoded({ extended : false }))

app.use( cors() )
app.use( helmet() )
app.use( morgan('tiny'))

app.use( router )

app.listen( puerto , ()=>{
    console.log(`Iniciando la API`)
})