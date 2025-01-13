const webhookService = require('../services/webhookService');

// Recibe y procesa el Webhook
const handleWebhook = async (req, res) => {
  try {
    const data = req.body;
    await webhookService.processWebhookData(data);
    res.status(200).json({ message: 'Webhook received and processed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing webhook' });
  }
};

module.exports = { handleWebhook };
