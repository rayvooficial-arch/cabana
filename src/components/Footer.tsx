import React from 'react';
import { MapPin } from 'lucide-react';
import { propertyAddress } from '../data/pricingAndInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e1811] text-white/75 py-12 sm:py-14 pb-24 lg:pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <span className="font-serif text-2xl font-bold text-white block mb-2">Cabana das Mansões</span>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Hospedagem na Chácara das Mansões, em Campo Grande/MS, com acomodações, áreas de lazer e experiências em meio à natureza.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8B466] mb-3">Navegação</h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <a href="#acomodacoes" className="hover:text-white">Acomodações</a>
              <a href="#modalidades" className="hover:text-white">Modalidades</a>
              <a href="#estrutura" className="hover:text-white">Estrutura</a>
              <a href="#tarifario" className="hover:text-white">Tarifas</a>
              <a href="#faq" className="hover:text-white">Dúvidas</a>
              <a href="#como-chegar" className="hover:text-white">Localização</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8B466] mb-3">Localização</h4>
            <p className="text-sm text-white/65 leading-relaxed flex gap-2">
              <MapPin className="w-4 h-4 text-[#D8B466] shrink-0 mt-0.5" />
              <span>{propertyAddress.fullName}<br />Campo Grande - MS</span>
            </p>
            <p className="text-xs text-white/45 mt-4">Check-in a partir das 15h • Check-out até 12h</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col sm:flex-row gap-2 sm:justify-between">
          <span>© {new Date().getFullYear()} Cabana das Mansões.</span>
          <span>Valores e disponibilidade sujeitos à consulta no motor oficial de reservas.</span>
        </div>
      </div>
    </footer>
  );
};
