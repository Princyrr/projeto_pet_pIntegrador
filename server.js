// src/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mongoose, Appointment } from './db.js'; // Importação corrigida

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rota para pegar todos os agendamentos (GET)
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    console.log('GET /appointments', appointments);
    res.json(appointments);
  } catch (err) {
    console.log('Erro ao buscar agendamentos:', err);
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
});

// Rota para adicionar um novo agendamento (POST)
app.post('/appointments', async (req, res) => {
  console.log('Recebendo dados:', req.body); // Log para depuração
  const newAppointment = req.body;
  
  if (!newAppointment.ownerName || !newAppointment.petName || !newAppointment.date || !newAppointment.time || !newAppointment.service) {
    return res.status(400).json({ error: 'Dados obrigatórios estão faltando' });
  }

  try {
    const appointment = new Appointment(newAppointment);
    await appointment.save();
    console.log('Salvo no MongoDB:', appointment); // Log para depuração
    res.status(201).json(appointment);
  } catch (err) {
    console.log('Erro ao adicionar agendamento:', err);
    res.status(500).json({ error: 'Erro ao adicionar agendamento' });
  }
});

// Rota para atualizar o agendamento (PUT)
app.put('/appointments/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    console.log('PUT /appointments/' + id, updatedAppointment);
    res.json(updatedAppointment);
  } catch (err) {
    console.log('Erro ao atualizar agendamento:', err);
    res.status(500).json({ error: 'Erro ao atualizar agendamento' });
  }
});

// Rota para excluir um agendamento (DELETE)
app.delete('/appointments/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    console.log('DELETE /appointments/' + id, deletedAppointment);
    res.json({ message: 'Agendamento excluído com sucesso' });
  } catch (err) {
    console.log('Erro ao excluir agendamento:', err);
    res.status(500).json({ error: 'Erro ao excluir agendamento' });
  }
});

// Tratamento de rota 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
