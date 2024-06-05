// Imports

const express = require("express");
const router = express.Router();
const doctorController = require('../../../controllers/api/v1/doctor_controller');

// defining routes
router.post('/register', doctorController.register);
router.post('/login', doctorController.login)

module.exports = router;