const express = require('express');
const port = 8000;
const db= require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

// starting App

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Redirecting routes
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){ console.log('error'); return;}

    console.log(`Server Running :: Port Number - ${port}`);
})