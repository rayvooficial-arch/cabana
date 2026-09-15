import React from 'react';
import { propertyAddress } from '../data/pricingAndInfo';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const encodedAddress = encodeURIComponent(
    'Rua Bom Retiro, Quadra 26, Lote 13, Chácara das Mansões'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="como-chegar" className="py-24 bg-[#F3ECE2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Localização Privilegiada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Como Chegar
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Um refúgio no campo próximo e de fácil acesso para você desacelerar da rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D9CC] shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1c3224] text-[#E8D4A2] flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6 text-[#C29B48]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#C29B48] font-bold block mb-1">
                  Endereço Oficial
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#14241A] mb-3">
                  Cabana das Mansões
                </h3>
                <p className="text-base text-[#2C332D] font-medium leading-relaxed">
                  {propertyAddress.fullName}
                </p>
                <p className="text-sm text-[#526048] mt-1">
                  Bairro {propertyAddress.neighborhood}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DED1] text-xs text-[#526048] space-y-2">
                <p className="font-semibold text-[#14241A] flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#C29B48]" />
                  Dicas para o trajeto:
                </p>
                <p>
                  Acesso tranquilo em estrada arborizada. Ao confirmar a sua reserva, você receberá a rota direta e ponto exato de localização via WhatsApp.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="open-google-maps-btn"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#1c3224] hover:bg-[#2d4f3b] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer group"
              >
                <MapPin className="w-4 h-4 text-[#C29B48]" />
                <span>Abrir no Google Maps / GPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C29B48] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Clean Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E3D9CC] shadow-md min-h-[380px] relative flex flex-col">
            <iframe
              title="Mapa de Localização - Cabana das Mansões"
              width="100%"
              height="100%"
              className="flex-1 min-h-[380px] w-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              src="https://maps.google.com/maps?q=Chacara+das+Mansões&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
            <div className="bg-[#14241A] px-6 py-3 text-white text-xs flex items-center justify-between">
              <span className="text-white/80">
                {propertyAddress.street} — {propertyAddress.neighborhood}
              </span>
              <span className="text-[#C29B48] font-medium hidden sm:inline">
                Spa em Meio à Natureza
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
