import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">{title}</h3>
        <p className="text-purple-600 mb-4 text-center">{description}</p>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg text-center">
          <span className="font-bold text-purple-800">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;