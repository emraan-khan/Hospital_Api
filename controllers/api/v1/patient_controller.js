// Importing Patient model
const Patient = require('../../../models/patientModel');

// Patient Registration
exports.register = async(req,res) =>{
    const doctor = req.doctor._id;

    try{
        const {name, phone} = req.body;
        let patient;
        patient = await Patient.find({
            phone
        });

        // sending patient if he exist 
        if(patient.length > 0){
            return res.status(200).json({
                success: true,
                body: patient[0]
            });
        }

        // creating patient if he doesn't already exist
        patient = await Patient.create({
            name,
            phone,
            doctor
        });

        // After Pateint is registered Successfully
        return res.status(201).josn({
            success: true,
            body: patient,
            message: 'Patient Registered Successfully!'
        })

    }catch (err){
        // Error handling in the catch block
        return res.status(401).json({
            success: false,
            message: 'Error Occurred'
        })
    }
}