import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';
import axios from 'axios';

interface AppointmentFormProps {
  onSubmit: (appointment: any) => void;
  onCancel: () => void;
  appointmentId?: number;  // ID opcional para casos de exclusão ou edição
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit, onCancel, appointmentId }) => {
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    petType: 'dog',
    phone: '',
    date: '',
    time: '',
    service: 'bath',
    notes: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Se um agendamento for passado, preenche o formulário com os dados
  useEffect(() => {
    if (appointmentId) {
      setLoading(true);
      axios.get(`http://localhost:5000/appointments/${appointmentId}`)
        .then(response => {
          setFormData(response.data);
          setIsEditing(true);
        })
        .catch(error => {
          console.error('Erro ao carregar agendamento:', error);
          setErrorMessage('Erro ao carregar agendamento.');
        })
        .finally(() => setLoading(false));
    }
  }, [appointmentId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.ownerName || !formData.phone || !formData.date || !formData.time) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);

      const response = isEditing
        ? await axios.put(`http://localhost:5000/appointments/${appointmentId}`, formData) // Atualiza o agendamento
        : await axios.post('http://localhost:5000/appointments', formData); // Cria um novo agendamento
      
      console.log('Agendamento salvo:', response.data);
      onSubmit(response.data); // Passa o agendamento para o componente pai
    } catch (error) {
      console.error('Erro ao salvar agendamento:', error);
      setErrorMessage('Erro ao salvar agendamento.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    if (appointmentId) {
      try {
        setLoading(true);
        await axios.delete(`http://localhost:5000/appointments/${appointmentId}`);
        console.log('Agendamento cancelado');
        onCancel(); // Fecha o formulário após excluir
      } catch (error) {
        console.error('Erro ao cancelar agendamento:', error);
        setErrorMessage('Erro ao cancelar agendamento.');
      } finally {
        setLoading(false);
      }
    } else {
      onCancel(); // Fecha o formulário sem fazer nada se não houver ID
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      <div>
        <label className="block text-sm font-medium text-purple-700 mb-1">
          <User className="w-4 h-4 inline mr-2" />
          Nome do Dono
        </label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Seu nome completo"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-700 mb-1">
          <Phone className="w-4 h-4 inline mr-2" />
          Telefone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="(00) 00000-0000"
          disabled={loading}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Nome do Pet
          </label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Nome do seu pet"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Tipo de Pet
          </label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          >
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
            <option value="other">Outro</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            <Calendar className="w-4 h-4 inline mr-2" />
            Data
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            <Clock className="w-4 h-4 inline mr-2" />
            Horário
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Serviço
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={loading}
        >
          <option value="bath">Banho</option>
          <option value="grooming">Tosa Higiênica</option>
          <option value="full">Banho e Tosa Completa</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-700 mb-1">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Observações
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Alguma informação adicional sobre seu pet?"
          rows={3}
          disabled={loading}
        ></textarea>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50"
          disabled={loading}
        >
          Cancelar
        </button>
        <button
  type="submit"
  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90"
  disabled={loading || !formData.ownerName || !formData.petName || !formData.phone || !formData.date || !formData.time}
>
  {loading ? 'Carregando...' : isEditing ? 'Editar' : 'Agendar'}
</button>

      </div>
    </form>
  );
};

export default AppointmentForm;
