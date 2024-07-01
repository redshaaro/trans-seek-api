const express = require('express');
const { getExporterByUsername } = require('../controllers/exporterController');

const router = express.Router();

router.get('/exporters/:username', getExporterByUsername);

module.exports = router;
