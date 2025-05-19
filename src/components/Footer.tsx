import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">PetStyle</h3>
            <p className="text-purple-200 mb-4">
              Cuidando do seu pet com carinho e profissionalismo. Oferecemos serviços de banho e tosa de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Horário de Funcionamento</h3>
            <ul className="text-purple-200 space-y-2">
              <li>Segunda - Sexta: 8:00 - 19:00</li>
              <li>Sábado: 8:00 - 17:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Contato</h3>
            <ul className="text-purple-200 space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-pink-300" />
                (11) 9999-9999
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-pink-300" />
                contato@petstyle.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} PetStyle. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;