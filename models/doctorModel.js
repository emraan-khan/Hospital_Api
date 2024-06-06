// Importing
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// defining doctor schema
const doctorSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Encrypting password using bcrypt library
doctorSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// Sign jwt token and return
doctorSchema.methods.getSignedJwtToken = function(){
    return jwt.sign({id: this._id},'secret',{
        expiresIn: '120m'
    });
};

const Doctor = mongoose.moodel('Doctor', doctorSchema);

// exports
module.exports = Doctor;