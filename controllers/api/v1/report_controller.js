// importing models
const Doctor = require('../../../models/doctorModel');
const Patient = require('../../../models/patientModel');
const Report = require('../../../models/reportModel');

module.exports.create_report = async function (req, res) {
    console.log('Inside report controller');

    // getting the doctor id

    const doctor = req.doctor._id;
    console.log('Dr: ' + doctor);
    try {
        console.log("Inside try");
        // Creating Report
        const report = await Report.create({
            doctor: doctor,
            patient: req.params.id,
            status: req.body.status
        })

        return res.status(200).json({
            success: true
        })
    } catch (err) {

        // erro handling in the catch block
        return res.status(401).json({
            success: false,
            message: err.message
        })
    }
}
// send all reports
module.exports.all_reports = async function (req, res) {
    try {
        const reports = Report.find({
            "patient": req.params.id
        })
        reports.exec(function (err, report) {
            return res.send(report);
        })
    } catch (err) {
        // erro handling in the catch block
        return res.status(401).json({
            success: false,
            message: err.message
        })
    }
}


// sending reports by status
module.exports.report_by_status = async (req, res) => {
    try {
        
        const reports = Report.find({
            'status': req.params.status
        })
        reports.exec(function (err, req) {
            return res.send(rep);
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}