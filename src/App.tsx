import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Scissors, Bath, Dog, Cat, Check, X } from 'lucide-react';
import AppointmentForm from './components/AppointmentForm';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentList from './components/AppointmentList';

// Interface para o tipo de agendamento
interface Appointment {
  id: number;
  service: string;
  petName: string;
  date: string;
}

function App() {
  // Estado para armazenar agendamentos
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'appointments'>('home');

  // Carregar agendamentos do localStorage ao iniciar
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    setAppointments(savedAppointments);
  }, []);

  // Salvar agendamentos no localStorage
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Função para adicionar um agendamento
  const addAppointment = (appointment: Appointment) => {
    const newAppointment = { ...appointment, id: Date.now() }; // Gerar ID único
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    setShowForm(false);
  };

  // Função para excluir um agendamento
  const deleteAppointment = (id: number) => {
    setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment.id !== id));
  };

  // Lista de serviços oferecidos
  const services = [
    {
      title: 'Banho Completo',
      description: 'Banho com shampoo especial, secagem, escovação e perfume.',
      icon: <Bath className="w-12 h-12 text-purple-600" />,
      price: 'A partir de R$ 50,00',
    },
    {
      title: 'Tosa Higiênica',
      description: 'Tosa nas áreas íntimas, patas e face para maior conforto do pet.',
      icon: <Scissors className="w-12 h-12 text-pink-500" />,
      price: 'A partir de R$ 35,00',
    },
    {
      title: 'Banho e Tosa Completa',
      description: 'Serviço completo incluindo banho, tosa, corte de unhas e limpeza de ouvidos.',
      icon: <Dog className="w-12 h-12 text-yellow-500" />,
      price: 'A partir de R$ 80,00',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-12">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                Cuidados com animais de estimação e spa
              </h1>
              <p className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto">
                Agende banho e tosa para seu pet com facilidade e conforto
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Agendar Agora
              </button>
            </section>

            {/* Services Section */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Nossos Serviços</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    price={service.price}
                  />
                ))}
              </div>
            </section>

            {/* About Section */}
            <section className="py-12 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Por que escolher nosso serviço?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <Check className="w-8 h-8 text-yellow-600" />, title: 'Profissionais Qualificados', description: 'Nossa equipe é treinada para oferecer o melhor cuidado para seu pet.' },
                  { icon: <Check className="w-8 h-8 text-pink-600" />, title: 'Produtos Premium', description: 'Utilizamos apenas produtos de alta qualidade e hipoalergênicos.' },
                  { icon: <Check className="w-8 h-8 text-purple-600" />, title: 'Ambiente Acolhedor', description: 'Espaço projetado para o conforto e segurança do seu pet.' },
                  { icon: <Check className="w-8 h-8 text-yellow-600" />, title: 'Agendamento Flexível', description: 'Horários convenientes para atender à sua agenda.' },
                ].map(({ icon, title, description }, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4">
                    <div className="bg-yellow-100 p-4 rounded-full mb-4">{icon}</div>
                    <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
                    <p className="text-purple-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-purple-800">Meus Agendamentos</h2>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Novo Agendamento
              </button>
            </div>
            <AppointmentList appointments={appointments} onDelete={deleteAppointment} />
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-800">Agendar Serviço</h2>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <AppointmentForm onSubmit={addAppointment} onCancel={() => setShowForm(false)} />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
