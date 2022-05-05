console.clear();

const express    = require('express');
const app        = express();
const { router } = require('./router/router.js');

const cors       = require('cors');

app.use( cors() );
app.use( express.urlencoded( { extended : false } ) );
app.use( express.json() );
app.use( router );

app.listen(5000 , () => {
    console.log("Iniciando App");
});