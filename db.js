import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://princyr:Aolrte@cluster0.ju4jtlc.mongodb.net/petstyle?retryWrites=true&w=majority')
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Definição do modelo de agendamento
const appointmentSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  petName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export { mongoose, Appointment }; // ⬅️ Exportando corretamente!
