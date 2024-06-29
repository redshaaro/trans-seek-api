const express = require('express');
const { getAllShipments ,getShipmentById} = require('../controllers/shipmentController');

const router = express.Router();

router.get('/shipments', getAllShipments);
router.get('/shipments/:id', getShipmentById);


module.exports = router;
