import React, { useState } from 'react';
import {
  Percent,
  Sparkles,
  Calendar,
  Layers,
  Flame,
  Star,
  Clock,
  Check,
  Info,
  ShieldCheck,
} from 'lucide-react';
import {
  STAY_MODES,
  SPECIAL_PACKAGES,
  SEASONAL_RATES,
} from '../data/commercial';
import { BookingButton } from './BookingButton';

interface PricingSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'modalidades' | 'especiais' | 'janeiro'>('modalidades');
  const [selectedStayMode, setSelectedStayMode] = useState<'express' | 'conforto'>('express');

  return (
    <section id="tarifario" className="py-24 bg-[#14241A] text-white relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1c3224]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B48]/20 text-[#E8D4A2] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C29B48]/30">
            <Percent className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Tarifas Oficiais & Transparentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Tarifário
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-[#E8D4A2] mb-3">
            “Escolha seus dias e venha viver essa experiência.”
          </p>

          <p className="font-sans text-xs sm:text-sm text-white/75 max-w-xl mx-auto">
            Consulte valores atualizados por modalidade ou conheça nossos pacotes exclusivos para datas especiais.
          </p>
        </div>

        {/* Seletor de Abas Intuitivo */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 p-1.5 rounded-full border border-white/15 flex flex-wrap gap-1 max-w-2xl">
            <button
              onClick={() => setActiveTab('modalidades')}
              id="tab-btn-modalidades"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'modalidades'
                  ? 'bg-[#C29B48] text-[#14241A] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Temporada Express & Conforto</span>
            </button>

            <button
              onClick={() => setActiveTab('especiais')}
              id="tab-btn-especiais"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'especiais'
                  ? 'bg-[#C29B48] text-[#14241A] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              <span>Natal & Réveillon</span>
            </button>

            <button
              onClick={() => setActiveTab('janeiro')}
              id="tab-btn-janeiro"
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'janeiro'
                  ? 'bg-[#C29B48] text-[#14241A] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Janeiro 2027</span>
            </button>
          </div>
        </div>

        {/* CONTEÚDO 1: MODALIDADES REGULARES */}
        {activeTab === 'modalidades' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Sub-seletor Express vs Conforto */}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setSelectedStayMode('express')}
                id="subtab-express"
                className={`px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                  selectedStayMode === 'express'
                    ? 'bg-[#FAF7F2] text-[#14241A] border-white font-bold'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                }`}
              >
                Temporada Express (Traga seu enxoval)
              </button>
              <button
                onClick={() => setSelectedStayMode('conforto')}
                id="subtab-conforto"
                className={`px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                  selectedStayMode === 'conforto'
                    ? 'bg-[#FAF7F2] text-[#14241A] border-white font-bold'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                }`}
              >
                Temporada Conforto (Tudo preparado)
              </button>
            </div>

            {/* Grid dos Cards da Modalidade Selecionada */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Cabanas */}
              <div
                id="pricing-card-cabanas"
                className="bg-[#1c3224]/90 rounded-3xl p-7 sm:p-9 border border-[#C29B48]/40 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#C29B48] font-bold">
                      {selectedStayMode === 'express' ? 'Temporada Express' : 'Temporada Conforto'}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      Até 4 pessoas
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    Cabanas (Éden & Manancial)
                  </h3>

                  <p className="text-xs text-white/75 mb-6 leading-relaxed">
                    {selectedStayMode === 'express'
                      ? 'Opção prática trazendo suas roupas de cama e banho. Itens de acolhimento inclusos para início de estadia.'
                      : 'Camas prontas, roupas de cama Queen, toalhas de banho e amenities preparados para o seu check-in imediato.'}
                  </p>

                  {/* Preços */}
                  <div className="space-y-3 mb-6">
                    {selectedStayMode === 'express' ? (
                      <>
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-white/70 block">Segunda a Quarta</span>
                            <span className="text-[10px] text-[#E8D4A2]">Dias úteis</span>
                          </div>
                          <div className="text-right">
                            <span className="font-serif text-xl sm:text-2xl font-bold text-white">
                              R$ 890{' '}
                              <span className="text-xs font-normal text-white/60">/diária</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-white/70 block">Quinta a Domingo</span>
                            <span className="text-[10px] text-white/50">Fim de semana</span>
                          </div>
                          <div className="text-right">
                            <span className="font-serif text-xl sm:text-2xl font-bold text-white">
                              R$ 1.090{' '}
                              <span className="text-xs font-normal text-white/60">/diária</span>
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                        <span className="text-xs uppercase tracking-wider text-[#E8D4A2] font-semibold block">
                          Temporada Conforto para Cabanas
                        </span>
                        <p className="text-xs text-white/80 leading-relaxed">
                          Os valores oficiais para a Temporada Conforto nas Cabanas estão em definição final.
                        </p>
                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#E8D4A2] border border-white/10">
                          Valor sob consulta no motor
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <BookingButton
                    id="pricing-cta-cabanas"
                    accommodationId="cabana-eden"
                    accommodationName="Cabana das Mansões"
                    label="VER DISPONIBILIDADE"
                    variant="gold"
                    size="md"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider"
                  />
                </div>
              </div>

              {/* Casa Pedacinho do Céu */}
              <div
                id="pricing-card-casa"
                className="bg-[#1c3224]/90 rounded-3xl p-7 sm:p-9 border border-[#C29B48]/40 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#C29B48] font-bold">
                      {selectedStayMode === 'express' ? 'Temporada Express' : 'Temporada Conforto'}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      Até 8 pessoas
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    Casa Pedacinho do Céu
                  </h3>

                  <p className="text-xs text-white/75 mb-6 leading-relaxed">
                    {selectedStayMode === 'express'
                      ? '3 quartos, 2 fogões a lenha, churrasqueira privativa e pet friendly. Economize trazendo seu enxoval.'
                      : 'Casa inteira com camas preparadas, enxoval completo de cama, mesa e banho, e amenities acolhedores.'}
                  </p>

                  {/* Preços Casa */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-white/70 block">Segunda a Quarta</span>
                        <span className="text-[10px] text-[#E8D4A2]">Dias úteis</span>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-white">
                          R${' '}
                          {selectedStayMode === 'express'
                            ? '1.350'
                            : '1.530'}{' '}
                          <span className="text-xs font-normal text-white/60">/diária</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-white/70 block">Quinta a Domingo</span>
                        <span className="text-[10px] text-white/50">Fim de semana</span>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-white">
                          R${' '}
                          {selectedStayMode === 'express'
                            ? '1.690'
                            : '1.870'}{' '}
                          <span className="text-xs font-normal text-white/60">/diária</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <BookingButton
                    id="pricing-cta-casa"
                    accommodationId="casa-pedacinho-do-ceu"
                    accommodationName="Casa Pedacinho do Céu"
                    label="VER DISPONIBILIDADE"
                    variant="gold"
                    size="md"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTEÚDO 2: NATAL, RÉVEILLON E DEZEMBRO */}
        {activeTab === 'especiais' && (
          <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in duration-300">
            {/* Pacotes Principais Natal & Réveillon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SPECIAL_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  id={`pkg-card-${pkg.id}`}
                  className="bg-[#1c3224]/90 rounded-3xl p-7 sm:p-9 border border-[#C29B48]/60 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-[#C29B48] text-[#14241A] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-2xl">
                    {pkg.highlightBadge}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#E8D4A2] text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{pkg.period}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 mb-6 leading-relaxed">
                      {pkg.note}
                    </p>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-white/60 block">
                          Valor Fechado do Pacote:
                        </span>
                        <span className="text-xs text-[#E8D4A2] font-medium">
                          {pkg.nights} noites de imersão completa
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D4A2]">
                          R$ {pkg.price.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <BookingButton
                    id={`reserve-pkg-${pkg.id}`}
                    label="VER DISPONIBILIDADE DO PACOTE"
                    variant="gold"
                    size="md"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider"
                  />
                </div>
              ))}
            </div>

            {/* Diárias Sazonais de Dezembro */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C29B48] block">
                Diárias de Alta Temporada em Dezembro:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SEASONAL_RATES.dezembroAlta.map((d) => (
                  <div
                    key={d.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <strong className="text-xs text-white block">{d.period}</strong>
                      <span className="text-[11px] text-white/60">{d.description}</span>
                    </div>
                    <span className="font-serif text-lg font-bold text-[#E8D4A2]">
                      R$ {d.rate.toLocaleString('pt-BR')}{' '}
                      <span className="text-[10px] font-normal text-white/60">/diária</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTEÚDO 3: JANEIRO 2027 */}
        {activeTab === 'janeiro' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
            {/* Aviso de 21 Horas */}
            <div className="p-4 rounded-2xl bg-[#C29B48]/15 border border-[#C29B48]/30 flex items-center justify-between gap-4 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C29B48] shrink-0" />
                <span>
                  <strong>Período Oficial:</strong> 03 a 31 de janeiro de 2027 • 21 horas de uso por diária.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cabanas Janeiro */}
              <div className="bg-[#1c3224]/90 rounded-3xl p-7 sm:p-9 border border-[#C29B48]/40 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#C29B48] font-bold">
                      Janeiro 2027
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white">
                      Até 4 pessoas
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    Cabanas (Éden & Manancial)
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/80">Segunda a Quarta</span>
                      <span className="font-serif text-xl font-bold text-white">
                        R$ 1.200 <span className="text-xs font-normal text-white/60">/diária</span>
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/80">Quinta a Domingo</span>
                      <span className="font-serif text-xl font-bold text-white">
                        R$ 1.400 <span className="text-xs font-normal text-white/60">/diária</span>
                      </span>
                    </div>
                  </div>
                </div>

                <BookingButton
                  id="cta-janeiro-cabanas"
                  label="VER DISPONIBILIDADE JANEIRO"
                  variant="gold"
                  size="md"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider"
                />
              </div>

              {/* Casa Janeiro */}
              <div className="bg-[#1c3224]/90 rounded-3xl p-7 sm:p-9 border border-[#C29B48]/40 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#C29B48] font-bold">
                      Janeiro 2027
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white">
                      Até 8 pessoas
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    Casa Pedacinho do Céu
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/80">Segunda a Sexta</span>
                      <span className="font-serif text-xl font-bold text-white">
                        R$ 1.640 <span className="text-xs font-normal text-white/60">/diária</span>
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/80">Quinta a Domingo</span>
                      <span className="font-serif text-xl font-bold text-white">
                        R$ 2.000 <span className="text-xs font-normal text-white/60">/diária</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/70 leading-relaxed mb-6 flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-[#C29B48] shrink-0 mt-0.5" />
                    <span>
                      {SEASONAL_RATES.janeiro2027.casa.overlapNotice}
                    </span>
                  </div>
                </div>

                <BookingButton
                  id="cta-janeiro-casa"
                  label="VER DISPONIBILIDADE JANEIRO"
                  variant="gold"
                  size="md"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
