console.clear()


const express = require('express')
const app     = express()

const {router} = require('./router/router')

const cors   = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')


app.use( express.json() )
app.use( express.urlencoded({ extended : false }))

app.use( cors() )
app.use( helmet() )
app.use( morgan('tiny'))

app.use( router )

app.listen( 5000 , ()=>{
    console.log(`Iniciando la API`)
})