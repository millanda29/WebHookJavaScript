const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Definir las rutas del webhook
app.use('/api', webhookRoutes);

// Servir el archivo index.html desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
