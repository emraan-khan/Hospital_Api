// Importing Dependencies
const Doctor = require('../../../models/doctorModel');
const jwt = require('jsonwebtoken');

// Doctor Registration
module.exports.register = async function(req,res){
    try{
        const doctor= await Doctor.create(req.body);
        return res.status(200).json({
            // if doctor registration is successfull
            success: true,
            message: doctor
        })
    }catch (err){

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
}

// Doctor Sign in
module.exports.login = async(req, res)=>{
    try{
        let {email , password} = req.body;

        // if email or password not exist
        if(!email || !password){ 
            res.status(400).json({
                success: false,
                message: 'No Email or Password'
            })
        }

        let doctor = await Doctor.findOne({email})
        // if doctor does not exist
        if(!doctor){
            res.status(401).json({
                success: false,
                message: 'Invalid Username or Password!'
            })
        }

        // check if password matches
        const isMatch = await doctor.matchPassword(password);
        // if password is wrong
        if(!isMatch){
            res.status(401).json({
                success: false,
                message: 'Invalid Username or Password!'
            })
        }

        // getting the jwt token
        const token = doctor.getSignedJwtToken();

        // return respoonse
        res.status(200).json({
            success: true,
            token,
            message: `Logged In successfully! Keep the Token Safe ${doctor.username}`        
        })

    } catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'Error Occurred!'
        })
    }
}