const express = require('express');
const router = express.Router();
const tareas = [];

router.get('/', (req, res) => {
  res.json(tareas);
});

router.post('/', (req, res) => {
  const nueva = { id: tareas.length + 1, texto: req.body.texto || '', completada: false };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

router.put('/:id', (req, res) => {
  const tarea = tareas.find(t => t.id == req.params.id);
  if (!tarea) return res.status(404).send('Tarea no encontrada');
  tarea.texto = req.body.texto || tarea.texto;
  tarea.completada = req.body.completada !== undefined ? req.body.completada : tarea.completada;
  res.json(tarea);
});

router.delete('/:id', (req, res) => {
  const index = tareas.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).send('Tarea no encontrada');
  tareas.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
