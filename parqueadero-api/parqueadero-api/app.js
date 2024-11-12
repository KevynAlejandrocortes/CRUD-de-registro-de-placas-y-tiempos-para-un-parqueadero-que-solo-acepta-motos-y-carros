require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const registroRoutes = require('./routes/registroroutes'); // Asegúrate de que la ruta del archivo sea correcta

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/parqueaderoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Registro de las rutas
app.use('/api/registros', registroRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
