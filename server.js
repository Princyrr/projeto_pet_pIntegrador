import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Armazenamento em memória (para não usar banco de dados)
let appointments = [];
let currentId = 1;

// Rota para pegar todos os agendamentos (GET)
app.get('/appointments', (req, res) => {
  console.log('GET /appointments', appointments);
  res.json(appointments);
});

// Rota para adicionar um novo agendamento (POST)
app.post('/appointments', (req, res) => {
  const newAppointment = req.body;
  
  // Verificação se os dados obrigatórios estão presentes
  if (!newAppointment.ownerName || !newAppointment.petName || !newAppointment.date || !newAppointment.time || !newAppointment.service) {
    return res.status(400).json({ error: 'Dados obrigatórios estão faltando' });
  }

  // Adiciona o id ao novo agendamento
  const appointmentWithId = { ...newAppointment, id: currentId++ };
  appointments.push(appointmentWithId);

  // Confirmação e resposta com o agendamento, incluindo o id
  console.log('POST /appointments', appointmentWithId);
  res.status(201).json(appointmentWithId);
});

// Rota para atualizar o agendamento (PUT)
app.put('/appointments/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const appointmentIndex = appointments.findIndex(appointment => appointment.id == id);

  if (appointmentIndex === -1) {
    return res.status(404).json({ error: 'Agendamento não encontrado' });
  }

  // Atualiza o agendamento
  appointments[appointmentIndex] = { ...appointments[appointmentIndex], ...updatedData };
  const updatedAppointment = appointments[appointmentIndex];

  console.log('PUT /appointments/' + id, updatedAppointment);
  res.json(updatedAppointment);
});

// Rota para excluir um agendamento (DELETE)
app.delete('/appointments/:id', (req, res) => {
  const { id } = req.params;
  const appointmentIndex = appointments.findIndex(appointment => appointment.id == id);

  if (appointmentIndex === -1) {
    return res.status(404).json({ error: 'Agendamento não encontrado' });
  }

  // Exclui o agendamento
  const deletedAppointment = appointments.splice(appointmentIndex, 1);

  console.log('DELETE /appointments/' + id, deletedAppointment);
  res.json({ message: 'Agendamento excluído com sucesso' });
});

// Tratamento de rota 404 (não encontrada)
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Inicia o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
