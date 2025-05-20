import React from 'react';
import { Scissors, Calendar, Home } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-yellow-500 shadow-md py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* 🐶 Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Scissors className="w-8 h-8 text-purple-600 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
            PetStyle
          </span>
        </div>
        
        {/* 📌 Navegação */}
        <nav className="flex space-x-1 md:space-x-4">
          <button
            onClick={() => setActiveTab('home')}
            onKeyDown={(e) => e.key === 'Enter' && setActiveTab('home')}
            aria-label="Ir para Início"
            className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 ${
              activeTab === 'home'
                ? 'bg-purple-100 text-purple-700 shadow-md'
                : 'text-gray-600 hover:bg-purple-50'
            }`}
          >
            <Home className="w-5 h-5 mr-2" />
            <span>Início</span>
          </button>
          
          <button
            onClick={() => setActiveTab('appointments')}
            onKeyDown={(e) => e.key === 'Enter' && setActiveTab('appointments')}
            aria-label="Ir para Agendamentos"
            className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 ${
              activeTab === 'appointments'
                ? 'bg-purple-100 text-purple-700 shadow-md'
                : 'text-gray-600 hover:bg-purple-50'
            }`}
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>Agendamentos</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;