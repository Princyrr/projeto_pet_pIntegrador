import React, { useState } from 'react';
import { Calendar, Clock, Trash2, Dog, Cat } from 'lucide-react';

interface Appointment {
  id: string;
  ownerName: string;
  petName: string;
  petType: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
  onDelete: (id: string) => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onDelete }) => {
  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-purple-800 mb-2">Nenhum agendamento</h3>
        <p className="text-purple-600">Você ainda não tem agendamentos. Clique em "Novo Agendamento" para começar.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-1">{appointment.petName}</h3>
                  <p className="text-purple-600 mb-4">Dono: {appointment.ownerName}</p>
                </div>
                <div className="flex items-center">
                  {appointment.petType === 'dog' ? (
                    <Dog className="w-6 h-6 text-yellow-500 mr-2" aria-label="Cachorro" />
                  ) : appointment.petType === 'cat' ? (
                    <Cat className="w-6 h-6 text-pink-500 mr-2" aria-label="Gato" />
                  ) : null}
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    {appointment.service}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center text-purple-700">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" aria-label="Data" />
                  {appointment.date}
                </div>
                <div className="flex items-center text-purple-700">
                  <Clock className="w-5 h-5 mr-2 text-purple-500" aria-label="Hora" />
                  {appointment.time}
                </div>
              </div>

              {appointment.notes && (
                <div className="mt-4 bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-700 text-sm">{appointment.notes}</p>
                </div>
              )}

              <div className="mt-4 flex justify-end gap-4">
                <button
                  onClick={() => {
                    const confirmDelete = window.confirm('Tem certeza de que deseja cancelar este agendamento?');
                    if (confirmDelete) {
                      onDelete(appointment.id);
                    }
                  }}
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                  aria-label="Cancelar agendamento"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;

