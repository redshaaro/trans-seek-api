const express = require('express');
const { exporterSignup, freightForwarderSignup, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup/exporter', exporterSignup);
router.post('/signup/forwarder', freightForwarderSignup);
router.post('/login', login);

module.exports = router;
