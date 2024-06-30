const express = require('express');
const { getAllFreightForwarders,getFreightForwarderById } = require('../controllers/freightForwarderController');

const router = express.Router();

router.get('/freight-forwarders', getAllFreightForwarders);
router.get('/freight-forwarders/:id', getFreightForwarderById);

module.exports = router;
