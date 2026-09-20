import React from 'react';
import { propertyAddress } from '../data/pricingAndInfo';
import { WHATSAPP_NUMBER_FORMATTED, BRAND_NAME } from '../config/constants';
import { createInstitutionalSupportLink, trackInstitutionalContactClick } from '../utils/whatsapp';
import { Sparkles, MapPin, Heart, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackInstitutionalContactClick('footer_link');
    window.open(createInstitutionalSupportLink('Rodapé do Site'), '_blank');
  };

  return (
    <footer className="bg-[#0e1811] text-white/80 py-16 border-t border-white/10 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-wider uppercase block">
                {BRAND_NAME}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C29B48] font-medium flex items-center gap-1 mt-1">
                <Sparkles className="w-3 h-3 text-[#C29B48]" />
                Spa em Meio à Natureza
              </span>
            </div>
            <p className="font-serif italic text-sm text-white/70 max-w-md leading-relaxed">
              “Mais do que uma hospedagem, uma experiência única e imersiva no campo.”
            </p>
            <p className="text-xs text-white/50 max-w-md">
              Desacelere, respire fundo e viva momentos especiais em família, a dois ou com seu pet em um refúgio acolhedor.
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                id="footer-whatsapp-btn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E8D4A2] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#C29B48]/30 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C29B48]" />
                <span>Atendimento: {WHATSAPP_NUMBER_FORMATTED}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Acomodações */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#E8D4A2]">
              Acomodações
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#cabana-eden"
                  className="hover:text-[#C29B48] transition-colors"
                >
                  Cabana Éden (Até 4 pessoas)
                </a>
              </li>
              <li>
                <a
                  href="#cabana-manancial"
                  className="hover:text-[#C29B48] transition-colors"
                >
                  Cabana Manancial (Até 4 pessoas)
                </a>
              </li>
              <li>
                <a
                  href="#casa-pedacinho-do-ceu"
                  className="hover:text-[#C29B48] transition-colors flex items-center gap-1.5"
                >
                  <span>Casa Pedacinho do Céu (Até 8 pessoas)</span>
                  <span className="text-[9px] bg-[#526048] text-white px-1.5 py-0.5 rounded">
                    Pet
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Localização & Informações */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#E8D4A2]">
              Endereço
            </h4>
            <p className="text-xs text-white/70 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C29B48] shrink-0 mt-0.5" />
              <span>
                {propertyAddress.street}
                <br />
                {propertyAddress.neighborhood}
              </span>
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-[#C29B48] block">
                Check-in: 15h00 | Check-out: 12h00
              </span>
              <span className="text-[11px] text-white/50 block">
                Roupas de cama e banho inclusas
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Cabana das Mansões. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-white/40">
            <span>Feito com cuidado para momentos de paz no campo</span>
            <Heart className="w-3 h-3 text-[#C29B48]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
