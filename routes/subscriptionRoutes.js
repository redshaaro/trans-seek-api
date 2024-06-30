const express = require('express');
const { updateExporterSubscription, updateFreightForwarderSubscription } = require('../controllers/subscriptionController');

const router = express.Router();

// Update subscription status for Exporter
router.put('/exporters/:id/subscription', updateExporterSubscription);

// Update subscription status for Freight Forwarder
router.put('/freight-forwarders/:id/subscription', updateFreightForwarderSubscription);

module.exports = router;
