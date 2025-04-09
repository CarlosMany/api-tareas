const request = require('supertest');
const express = require('express');
const tareasRouter = require('../routes/tareas');

const app = express();
app.use(express.json());
app.use('/api/tareas', tareasRouter);

describe('API de tareas', () => {
  it('debe crear una nueva tarea', async () => {
    const res = await request(app)
      .post('/api/tareas')
      .send({ texto: 'Aprender CI/CD' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.texto).toBe('Aprender CI/CD');
  });

  it('debe obtener todas las tareas', async () => {
    const res = await request(app).get('/api/tareas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
