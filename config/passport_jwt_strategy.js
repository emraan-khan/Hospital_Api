const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctorModel');

// passport Authentication
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospitalKey'
};

passport.use(new JWTStrategy(opts, function(jwtPayload, done){
    // Finding Doctor
    Doctor.findById(jwtPayload._id, function(err, user){
        if(err){
            console.log('Error in finding user from JWT');
            return done(err, false);
        }

        if(user){
            return done(null, user);
        }
        else{
            return done(null, false);
        }
    })
}))

module.exports = passport;