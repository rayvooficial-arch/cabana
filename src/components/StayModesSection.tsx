import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  PackageCheck,
  ShieldCheck,
  ArrowRight,
  Eye,
  Info,
  Layers,
  Bed,
  Bath,
  Utensils,
  Coffee,
  X,
  Heart,
} from 'lucide-react';
import { STAY_MODES, LINEN_KITS } from '../data/commercial';
import { BookingButton } from './BookingButton';

interface StayModesSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
}

export const StayModesSection: React.FC<StayModesSectionProps> = ({ onOpenBooking }) => {
  const [selectedLinenKit, setSelectedLinenKit] = useState<'cabanas' | 'casa' | null>(null);

  return (
    <section id="modalidades" className="py-24 bg-[#FAF7F2] text-[#2C332D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Escolha Sua Modalidade</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Duas Formas Especiais de Hospedagem
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed max-w-2xl mx-auto">
            Seja com praticidade econômica ou conveniência absoluta, oferecemos duas propostas pensadas para diferentes perfis de hóspedes — sempre com acesso livre a toda a infraestrutura da propriedade.
          </p>
        </div>

        {/* Comparador Visual Lado a Lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-14">
          {/* Card 1: Temporada Express */}
          <div
            id="card-temporada-express"
            className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DED1] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1c3224] px-3 py-1 rounded-full bg-[#F3ECE2] border border-[#E8DED1]">
                  Economia & Liberdade
                </span>
                <span className="text-xs text-[#526048] font-medium">Opção Prática</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241A] mb-2">
                {STAY_MODES.express.name}
              </h3>

              <p className="font-serif italic text-base text-[#C29B48] mb-3">
                “{STAY_MODES.express.tagline}”
              </p>

              <p className="text-xs sm:text-sm text-[#526048] leading-relaxed mb-6">
                {STAY_MODES.express.explanation}
              </p>

              {/* O que o hóspede traz */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DED1]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14241A] block mb-2.5 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-[#1c3224]" />
                  Você só precisa trazer:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#526048]">
                  {STAY_MODES.express.guestMustBring.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Para facilitar sua chegada */}
              <div className="mb-6 p-4 rounded-2xl bg-[#F3ECE2]/80 border border-[#E3D9CC]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14241A] block mb-2 flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-[#C29B48]" />
                  Para facilitar sua chegada, deixaremos disponível:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {STAY_MODES.express.providedForArrival?.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-[#14241A] font-medium border border-[#E8DED1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preços Express */}
              <div className="space-y-3 pt-4 border-t border-[#E8DED1]">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#526048] block">
                  Valores Oficiais da Temporada Express:
                </span>

                {/* Cabanas */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DED1] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#14241A] block">Cabanas (Éden e Manancial)</span>
                    <span className="text-[10px] text-[#526048]">Seg a Qua: R$ 890 • Qui a Dom: R$ 1.090</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#526048] block">A partir de</span>
                    <span className="font-serif text-lg font-bold text-[#14241A]">R$ 890</span>
                  </div>
                </div>

                {/* Casa */}
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DED1] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#14241A] block">Casa Pedacinho do Céu</span>
                    <span className="text-[10px] text-[#526048]">Seg a Qua: R$ 1.350 • Qui a Dom: R$ 1.690</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#526048] block">A partir de</span>
                    <span className="font-serif text-lg font-bold text-[#14241A]">R$ 1.350</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8DED1]">
              <BookingButton
                id="choose-express-mode-cta"
                label="ESCOLHER TEMPORADA EXPRESS"
                variant="outline"
                size="md"
                className="w-full py-4 text-xs font-bold uppercase tracking-wider"
              />
            </div>
          </div>

          {/* Card 2: Temporada Conforto */}
          <div
            id="card-temporada-conforto"
            className="bg-[#14241A] text-white rounded-3xl p-7 sm:p-9 border border-[#C29B48]/50 shadow-2xl relative flex flex-col justify-between"
          >
            {/* Badge de Destaque */}
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#C29B48] to-[#d6af57] text-[#14241A] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
              Máxima Conveniência
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8D4A2] px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  Experiência Completa
                </span>
                <span className="text-xs text-white/70 font-medium">Tudo Preparado</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {STAY_MODES.conforto.name}
              </h3>

              <p className="font-serif italic text-base text-[#E8D4A2] mb-3">
                “{STAY_MODES.conforto.concept}”
              </p>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                {STAY_MODES.conforto.explanation}
              </p>

              {/* Incluso */}
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8D4A2] block mb-2.5 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C29B48]" />
                  Incluso na Temporada Conforto:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                  {STAY_MODES.conforto.includedItems?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* O hóspede precisa trazer apenas */}
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8D4A2] block mb-2 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#C29B48]" />
                  O hóspede precisa trazer apenas:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-white/80">
                  {STAY_MODES.conforto.guestMustBring.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões para ver enxoval completo */}
              <div className="mb-6 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => setSelectedLinenKit('cabanas')}
                  id="view-linen-cabanas-btn"
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#E8D4A2] text-xs font-medium transition-colors border border-[#C29B48]/30 flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C29B48]" />
                  <span>Enxoval Cabanas</span>
                </button>

                <button
                  onClick={() => setSelectedLinenKit('casa')}
                  id="view-linen-casa-btn"
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#E8D4A2] text-xs font-medium transition-colors border border-[#C29B48]/30 flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C29B48]" />
                  <span>Enxoval Casa Pedacinho do Céu</span>
                </button>
              </div>

              {/* Preços Conforto */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider font-bold text-white/70 block">
                  Valores Oficiais da Temporada Conforto:
                </span>

                {/* Casa */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Casa Pedacinho do Céu</span>
                    <span className="text-[10px] text-white/60">Seg a Qua: R$ 1.530 • Qui a Dom: R$ 1.870</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-white/60 block">A partir de</span>
                    <span className="font-serif text-lg font-bold text-[#E8D4A2]">R$ 1.530</span>
                  </div>
                </div>

                {/* Cabanas */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Cabanas (Éden e Manancial)</span>
                    <span className="text-[10px] text-[#E8D4A2]/80">Em definição oficial para novas reservas</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-serif font-bold text-[#E8D4A2] px-2 py-0.5 rounded-md bg-white/10">
                      Sob consulta
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <BookingButton
                id="choose-conforto-mode-cta"
                label="QUERO MAIS CONFORTO"
                variant="gold"
                size="md"
                className="w-full py-4 text-xs font-bold uppercase tracking-wider shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhamento do Enxoval */}
      {selectedLinenKit && (
        <div
          id="linen-kit-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedLinenKit(null);
          }}
        >
          <div
            id="linen-kit-modal-card"
            className="bg-[#FAF7F2] text-[#2C332D] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#C29B48]/40 flex flex-col relative animate-in zoom-in-95 duration-200 my-auto"
          >
            {/* Header Modal */}
            <div className="bg-[#14241A] text-white p-6 sm:p-7 relative border-b border-[#C29B48]/30">
              <button
                onClick={() => setSelectedLinenKit(null)}
                id="close-linen-modal-btn"
                aria-label="Fechar Detalhes do Enxoval"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 border border-[#C29B48]/40 text-[#E8D4A2] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Bed className="w-3 h-3 text-[#C29B48]" />
                <span>Temporada Conforto</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                {LINEN_KITS[selectedLinenKit].title}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 font-light mt-1">
                {LINEN_KITS[selectedLinenKit].appliesTo} — Enxoval completo higienizado e pronto para sua chegada.
              </p>
            </div>

            {/* Lista dos Itens do Enxoval */}
            <div className="p-6 sm:p-7 space-y-4 max-h-[65vh] overflow-y-auto">
              <div className="space-y-2">
                {LINEN_KITS[selectedLinenKit].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-[#E8DED1] flex items-center gap-3 text-xs sm:text-sm text-[#2C332D]"
                  >
                    <Check className="w-4 h-4 text-[#1c3224] shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#F3ECE2] border border-[#E3D9CC] text-xs text-[#526048]">
                <strong className="text-[#14241A] block mb-1">
                  Padrão de Higiene & Conforto Cabana das Mansões:
                </strong>
                Todas as peças são rigorosamente lavadas, passadas e esterilizadas antes do seu check-in, garantindo uma recepção acolhedora e impecável.
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedLinenKit(null)}
                  id="close-linen-kit-bottom-btn"
                  className="px-6 py-2.5 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
