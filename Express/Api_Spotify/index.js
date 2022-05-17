console.clear();

const CLIENT_ID = `4aced40438e6447298ca4f0fe75a9d78`;
const CLIENT_SECRET = "85cb07c778ac499fb0854b2a08b29446";
let token;

const express   = require( 'express' );
const app       = express();
const request   = require( 'request' );
const cors      = require( 'cors' );
const helmet    = require( 'helmet' );
const morgan    = require( 'morgan' );


app.use( express.json() );
app.use( express.urlencoded( { extended : false } ) );

app.use( cors() );
app.use( helmet() );
app.use( morgan('tiny') );

const getToken = () => {
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    
    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            token = body.access_token;

            const header = {
                "Authorization" : `Bearer ${ token }`,
                "Content-Type" : "application/json"
            }

            
        }
    });
}

getToken();

app.listen( 5000 , () => {
    console.log( "API iniciada" );
})
