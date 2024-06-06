// importing
const mongoose = require('mongoose');

// defining report schema
const reportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
})