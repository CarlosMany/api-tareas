const express = require('express');
const tareasRouter = require('./routes/tareas');

const app = express();
app.use(express.json());
app.use('/api/tareas', tareasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
