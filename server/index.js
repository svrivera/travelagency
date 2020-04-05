// Imports Express
const express = require('express');
// Imports routes
const routes = require('./routes');
// Imports config files
const configs = require('./config')

const path = require('path');

// Allows node to read form response
const bodyParser = require('body-parser');

// Configures Express
const app = express();

// Imports database
// const db = require('./config/database');

// Tests database conection
// db.authenticate()
//     .then( () => { console.log('Connected to DB') } )
//     .catch( () => { console.log(error) } );

// Enables pug
app.set('view engine', 'pug');

// Adds the views
app.set('views', path.join(__dirname, './views'));

// Loads the public static folder
app.use(express.static('public'));

// Determines enviroment
const config = configs[app.get('env')];
// Creates a variable with the enviroment
app.locals.siteName = config.siteName;

// Gets current year for footer
app.use((req, res, next) => {
    // Creates a new date
    const date = new Date();
    res.locals.currentYear = date.getFullYear();
    // gets the path were the user is (home, experience, aboutus, travel
    res.locals.route = req.path;
    // We are using a middleware
    return next();
})

// Runs body parser
app.use(bodyParser.urlencoded({extended: true}));

// Loads routes
app.use('/', routes());

// Port and Host for the app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('Server OK')
});