const express = require('express');
const router = express.Router();

let tareas = [
  { id: 1, texto: 'Aprender JavaScript' },
  { id: 2, texto: 'Practicar Node.js' },
  { id: 3, texto: 'Configurar CI/CD' }
];

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.status(200).json(tareas);
});

// Crear una nueva tarea
router.post('/', (req, res) => {
  const { texto } = req.body;
  if (!texto) {
    return res.status(400).json({ error: 'El campo "texto" es obligatorio' });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    texto
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

module.exports = router;

