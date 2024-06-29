const express = require('express');
const { getAllTrucks } = require('../controllers/truckController');

const router = express.Router();

router.get('/trucks', getAllTrucks);

module.exports = router;
