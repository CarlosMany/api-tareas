const express = require('express');
const tareasRouter = require('./routes/tareas');

const app = express();
app.use(express.json());
app.use('/api/tareas', tareasRouter);

// Ruta raíz para evitar el error "Cannot GET /"
app.get('/', (req, res) => {
  res.send('API de tareas funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
