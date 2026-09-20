import React, { useState } from 'react';
import { accommodations } from '../data/accommodations';
import { Accommodation } from '../types';
import { BookingButton } from './BookingButton';
import {
  Users,
  Sparkles,
  Bath,
  Tv,
  Heart,
  Check,
  Flame,
  Armchair,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Percent,
  Eye,
} from 'lucide-react';

interface AccommodationsSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
  onOpenDetails?: (accommodation: Accommodation) => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  onOpenBooking,
  onOpenDetails,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'eden' | 'manancial' | 'pedacinho-do-ceu'>('all');

  // Controle do índice da foto ativa para cada acomodação inline (sem popup)
  const [activePhotoIndices, setActivePhotoIndices] = useState<Record<string, number>>({
    eden: 0,
    manancial: 0,
    'pedacinho-do-ceu': 0,
  });

  const handleNextPhoto = (accId: string, totalPhotos: number) => {
    setActivePhotoIndices((prev) => ({
      ...prev,
      [accId]: (prev[accId] + 1) % totalPhotos,
    }));
  };

  const handlePrevPhoto = (accId: string, totalPhotos: number) => {
    setActivePhotoIndices((prev) => ({
      ...prev,
      [accId]: (prev[accId] - 1 + totalPhotos) % totalPhotos,
    }));
  };

  const handleSelectThumbnail = (accId: string, index: number) => {
    setActivePhotoIndices((prev) => ({
      ...prev,
      [accId]: index,
    }));
  };

  const visibleAccommodations =
    activeTab === 'all'
      ? accommodations
      : accommodations.filter((acc) => acc.id === activeTab);

  return (
    <section id="acomodacoes" className="py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Exclusividade & Conforto</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Nossas Acomodações
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Veja as fotos reais, estrutura e comodidades de cada refúgio. Escolha o seu espaço ideal e reserve com facilidade e transparência.
          </p>
        </div>

        {/* Quick Filter Tabs (Sem fricção) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveTab('all')}
            id="tab-all-accommodations"
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#1c3224] text-[#FAF7F2] shadow-md scale-105'
                : 'bg-white text-[#526048] border border-[#E3D9CC] hover:border-[#C29B48]'
            }`}
          >
            Todas as Acomodações
          </button>

          <button
            onClick={() => setActiveTab('eden')}
            id="tab-eden"
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'eden'
                ? 'bg-[#1c3224] text-[#FAF7F2] shadow-md scale-105'
                : 'bg-white text-[#526048] border border-[#E3D9CC] hover:border-[#C29B48]'
            }`}
          >
            Cabana Éden (Até 4 pessoas)
          </button>

          <button
            onClick={() => setActiveTab('manancial')}
            id="tab-manancial"
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'manancial'
                ? 'bg-[#1c3224] text-[#FAF7F2] shadow-md scale-105'
                : 'bg-white text-[#526048] border border-[#E3D9CC] hover:border-[#C29B48]'
            }`}
          >
            Cabana Manancial (Até 4 pessoas)
          </button>

          <button
            onClick={() => setActiveTab('pedacinho-do-ceu')}
            id="tab-pedacinho-do-ceu"
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pedacinho-do-ceu'
                ? 'bg-[#1c3224] text-[#FAF7F2] shadow-md scale-105'
                : 'bg-white text-[#526048] border border-[#E3D9CC] hover:border-[#C29B48]'
            }`}
          >
            <span>Casa Pedacinho do Céu (Até 8 pessoas)</span>
            <span className="text-[10px] bg-[#C29B48] text-[#14241A] font-extrabold px-1.5 py-0.2 rounded">
              PET
            </span>
          </button>
        </div>

        {/* 
          SHOWCASE DAS ACOMODAÇÕES:
          Apresentação direta com fotos em galeria integrada na própria página,
          detalhes completos e botão direto de reserva. Sem nenhum popup!
        */}
        <div className="space-y-16">
          {visibleAccommodations.map((acc) => {
            const currentPhotoIndex = activePhotoIndices[acc.id] || 0;
            const currentPhoto = acc.galleryImages[currentPhotoIndex] || acc.coverImage;

            return (
              <div
                key={acc.id}
                id={`accommodation-showcase-${acc.id}`}
                className="bg-white rounded-3xl border border-[#E3D9CC] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* 
                    COLUNA 1: GALERIA INLINE COM FOTOS REAIS
                    Navegação direta por setas e miniaturas clicáveis
                  */}
                  <div className="lg:col-span-7 bg-stone-100 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E3D9CC]">
                    {/* Imagem Principal em Destaque */}
                    <div className="relative h-72 sm:h-96 lg:h-[430px] w-full rounded-2xl overflow-hidden bg-stone-200 shadow-sm group">
                      <img
                        src={currentPhoto}
                        alt={`${acc.name} - foto ${currentPhotoIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                        loading="lazy"
                      />

                      {/* Gradiente sutil inferior */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Badges superiores na foto */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                        <span className="bg-[#14241A]/90 backdrop-blur-md text-[#E8D4A2] text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5 shadow">
                          <Users className="w-3.5 h-3.5 text-[#C29B48]" />
                          {acc.capacity}
                        </span>

                        {acc.isPetFriendly && (
                          <span className="bg-[#526048] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 text-[#C29B48]" />
                            PET FRIENDLY
                          </span>
                        )}
                      </div>

                      {/* Contador de Fotos */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                        {currentPhotoIndex + 1} / {acc.galleryImages.length}
                      </div>

                      {/* Botão Foto Anterior */}
                      <button
                        onClick={() => handlePrevPhoto(acc.id, acc.galleryImages.length)}
                        aria-label="Foto anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm z-10 hover:scale-105 active:scale-95"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      {/* Botão Próxima Foto */}
                      <button
                        onClick={() => handleNextPhoto(acc.id, acc.galleryImages.length)}
                        aria-label="Próxima foto"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm z-10 hover:scale-105 active:scale-95"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Legenda na base da foto */}
                      <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                        <span className="text-xs uppercase tracking-wider text-[#C29B48] font-bold block drop-shadow">
                          {acc.name}
                        </span>
                        <span className="text-sm font-medium drop-shadow line-clamp-1">
                          {acc.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Barra de Miniaturas Clicáveis Abaixo da Foto */}
                    <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                      {acc.galleryImages.map((img, thumbIdx) => (
                        <button
                          key={thumbIdx}
                          onClick={() => handleSelectThumbnail(acc.id, thumbIdx)}
                          className={`relative shrink-0 w-16 sm:w-20 h-12 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            currentPhotoIndex === thumbIdx
                              ? 'border-[#C29B48] scale-105 shadow-md ring-2 ring-[#C29B48]/30'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 
                    COLUNA 2: ESTRUTURA, COMODIDADES E BOTÃO DIRETO DE RESERVA
                  */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                    <div className="space-y-5">
                      {/* Header da Acomodação */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#C29B48]">
                            {acc.tagline}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241A]">
                          {acc.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#526048] italic mt-1 leading-relaxed">
                          “{acc.description}”
                        </p>
                      </div>

                      {/* Bloco de Valores Transparentes */}
                      <div className="p-4 rounded-2xl bg-[#F3ECE2] border border-[#E8DED1] space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#526048]">
                          <span className="uppercase tracking-wider font-semibold">
                            Segunda a Quarta (20% OFF):
                          </span>
                          <span className="font-serif text-lg font-bold text-[#14241A]">
                            R$ {acc.weekdayPrice.toLocaleString('pt-BR')}{' '}
                            <span className="text-xs font-normal text-[#526048]">/diária</span>
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-[#526048] pt-1.5 border-t border-[#E3D9CC]">
                          <span className="uppercase tracking-wider">
                            Quinta a Domingo:
                          </span>
                          <span className="font-serif text-base font-semibold text-[#14241A]">
                            R$ {acc.weekendPrice.toLocaleString('pt-BR')}{' '}
                            <span className="text-xs font-normal text-[#526048]">/diária</span>
                          </span>
                        </div>
                      </div>

                      {/* Estrutura de Quartos e Camas */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-[#14241A] uppercase tracking-wider block">
                          Estrutura de Dormitórios:
                        </span>
                        <div className="space-y-1.5 text-xs text-[#526048]">
                          {acc.structure.map((item, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DED1]"
                            >
                              <strong className="text-[#14241A] block mb-0.5">
                                {item.title}:
                              </strong>
                              <span className="leading-relaxed">
                                {item.details.join(' • ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Principais Diferenciais com Tags */}
                      <div>
                        <span className="text-xs font-bold text-[#14241A] uppercase tracking-wider block mb-2">
                          Comodidades & Lazer:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {acc.highlightBadges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[#1c3224] border border-[#E8DED1] font-medium flex items-center gap-1"
                            >
                              <Check className="w-3 h-3 text-[#C29B48]" />
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botões de Ação Direta (Sem Fricção) */}
                    <div className="pt-6 mt-6 border-t border-[#E8DED1] space-y-2.5">
                      <BookingButton
                        id={`direct-reserve-btn-${acc.id}`}
                        accommodationId={acc.id}
                        accommodationName={acc.name}
                        label="VER DISPONIBILIDADE"
                        variant="primary"
                        size="md"
                        className="w-full py-4 text-xs font-bold uppercase tracking-wider"
                      />

                      {onOpenDetails && (
                        <button
                          onClick={() => onOpenDetails(acc)}
                          id={`view-full-details-btn-${acc.id}`}
                          className="w-full py-2.5 text-center text-xs text-[#526048] hover:text-[#14241A] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer hover:underline"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C29B48]" />
                          <span>Ver todas as fotos e especificações completas</span>
                        </button>
                      )}

                      <p className="text-center text-[11px] text-[#526048]">
                        Check-in 15h • Check-out 12h • Roupas de cama 600 fios inclusas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner no Final da Seção */}
        <div className="mt-16 bg-[#F3ECE2] border border-[#E8DED1] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#14241A]">
              Planejando seus dias de descanso?
            </h4>
            <p className="text-xs sm:text-sm text-[#526048]">
              Consulte as datas disponíveis em nosso calendário online e garanta sua cabana exclusiva.
            </p>
          </div>

          <BookingButton
            id="accommodations-bottom-help-btn"
            label="VER DISPONIBILIDADE GERAL"
            variant="compact"
            size="md"
            className="px-8 py-3.5 rounded-full whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  );
};
