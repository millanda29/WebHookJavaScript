const express = require('express');
const { handleWebhook } = require('../controllers/webhookController');
const router = express.Router();

// Ruta para recibir el webhook
router.post('/webhook', handleWebhook);

module.exports = router;
