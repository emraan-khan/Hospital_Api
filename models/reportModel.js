// importing
const mongoose = require('mongoose');

// defining report schema
const reportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    status: {
        type: String,
        required: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    },
    data: {
        type: Date,
        default: Date.now,
        required: true,
    }
}, {
    timestamps: true
});

// Exports
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;