// importing models
const Doctor = require('../../../models/doctorModel');
const Patient = require('../../../models/patientModel');
const Report = require('../../../models/reportModel');

module.exports.create_report = async function(req, res){
    console.log('Inside report controller');

    // getting the doctor id

    const doctor = req.doctor._id;
    console.log('Dr: '+doctor);
    try{
        console.log("Inside try");
        // Creating Report
        const report = await Report.create({
            doctor: doctor,
            patient: req.params.id,
            status: req.body.status
        })

    }catch(err){

    }
}