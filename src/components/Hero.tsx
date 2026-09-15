import React, { useState, useRef } from 'react';
import { Calendar, ChevronDown, Compass, Sparkles, Volume2, VolumeX, ShieldCheck, Bath, Heart, Film } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  videoUrl?: string;
}

// Imagem de alta resolução utilizada como fallback e poster enquanto o vídeo carrega
const HERO_POSTER_IMAGE =
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85';

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, videoUrl }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="inicio" className="w-full bg-[#122118]">
      {/* 
        ========================================================================
        1. VÍDEO PRINCIPAL — LIMPO, NÍTIDO, RESPONSIVO E CINEMATOGRÁFICO
        ========================================================================
      */}
      <div className="relative w-full h-[78vh] sm:h-[84vh] lg:h-[88vh] min-h-[560px] flex flex-col justify-end overflow-hidden">
        {/* Camada do Vídeo ou Imagem de Fundo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {videoUrl ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={HERO_POSTER_IMAGE}
              className="w-full h-full object-cover object-center"
            >
              <source src={videoUrl} type="video/mp4" />
              <img
                src={HERO_POSTER_IMAGE}
                alt="Cabana das Mansões — Spa em Meio à Natureza"
                className="w-full h-full object-cover object-center"
              />
            </video>
          ) : (
            <img
              src={HERO_POSTER_IMAGE}
              alt="Cabana das Mansões — Spa em Meio à Natureza"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
            />
          )}

          {/* Sombra suave no topo para a Navbar */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* 
            Degradê inferior sutil apenas para garantir legibilidade dos botões e título,
            mantendo a maior parte do vídeo 100% limpa e visível.
          */}
          <div className="absolute inset-x-0 bottom-0 h-[48%] sm:h-[42%] bg-gradient-to-t from-[#122118] via-[#122118]/70 to-transparent pointer-events-none" />
        </div>

        {/* Botão de Controle de Áudio do Vídeo */}
        {videoUrl && (
          <button
            onClick={toggleMute}
            id="hero-toggle-audio-btn"
            aria-label={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
            className="absolute top-24 sm:top-28 right-4 sm:right-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer text-xs font-medium shadow-lg"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#C29B48]" />
                <span className="hidden sm:inline">Som Desativado</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#C29B48]" />
                <span className="hidden sm:inline">Som Ativo</span>
              </>
            )}
          </button>
        )}

        {/* 
          Conteúdo Essencial Sobreposto ao Vídeo (Limpo & Elegante)
        */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pb-8 sm:pb-12 flex flex-col items-center">
          {/* Selo Dourado */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c3224]/80 border border-[#C29B48]/50 backdrop-blur-md mb-3 sm:mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#E8D4A2]">
              Spa em Meio à Natureza
            </span>
          </div>

          {/* Nome da Hospedagem */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-semibold tracking-tight leading-[1.1] mb-2 sm:mb-3 drop-shadow-md">
            Cabana das Mansões
          </h1>

          {/* Slogan */}
          <p className="font-serif italic text-sm sm:text-lg md:text-xl text-[#E8D4A2] max-w-2xl mx-auto mb-5 sm:mb-6 font-normal drop-shadow">
            “Mais do que uma hospedagem, uma experiência única e imersiva no campo.”
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              id="hero-reserve-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C29B48] to-[#D8B466] hover:from-[#d6af57] hover:to-[#e4c278] text-[#14241A] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#C29B48]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-[#C29B48]/50 ring-offset-2 ring-offset-[#122118]"
            >
              <Calendar className="w-4 h-4 text-[#14241A]" />
              <span>Consultar Disponibilidade</span>
            </button>

            <a
              href="#acomodacoes"
              id="hero-explore-accommodations-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 hover:border-white/40 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#C29B48]" />
              <span>Conhecer as Acomodações</span>
            </a>
          </div>

          {/* Microcopy de Confiança & Redução de Fricção */}
          <p className="mt-3 text-[11px] sm:text-xs text-white/70 tracking-wide flex items-center justify-center gap-1.5 font-light">
            <span className="text-[#C29B48]">✓</span> Atendimento personalizado via WhatsApp • Datas exclusivas e limitadas
          </p>
        </div>
      </div>

      {/* 
        ========================================================================
        2. SEÇÃO ABAIXO DO VÍDEO (FORA DO VÍDEO) COM DEGRADÊ SOFISTICADO & DESCUBRA
        ========================================================================
      */}
      <div className="relative z-10 w-full bg-gradient-to-b from-[#122118] via-[#16271D] to-[#FAF7F2] pt-8 pb-14 px-4 sm:px-6 border-t border-[#C29B48]/25 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          {/* Frase de Conexão com a Natureza */}
          <p className="text-center font-sans text-xs sm:text-sm text-[#E8D4A2]/90 max-w-xl mx-auto mb-8 uppercase tracking-widest font-medium">
            Desacelere, respire fundo e viva momentos especiais
          </p>

          {/* Grid dos 4 Diferenciais com Acabamento Sofisticado */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10">
            {/* Card 1: Privacidade */}
            <div className="bg-[#14241A]/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#C29B48]/30 shadow-lg text-center hover:border-[#C29B48] transition-all group">
              <div className="w-9 h-9 rounded-full bg-[#C29B48]/15 text-[#C29B48] mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="block font-serif text-base sm:text-lg font-bold text-[#E8D4A2] mb-1">
                Privacidade
              </span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider block">
                Cabanas Exclusivas
              </span>
            </div>

            {/* Card 2: Relaxamento */}
            <div className="bg-[#14241A]/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#C29B48]/30 shadow-lg text-center hover:border-[#C29B48] transition-all group">
              <div className="w-9 h-9 rounded-full bg-[#C29B48]/15 text-[#C29B48] mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bath className="w-5 h-5" />
              </div>
              <span className="block font-serif text-base sm:text-lg font-bold text-[#E8D4A2] mb-1">
                Relaxamento
              </span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider block">
                Hidromassagens & Spa
              </span>
            </div>

            {/* Card 3: Fazendinha */}
            <div className="bg-[#14241A]/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#C29B48]/30 shadow-lg text-center hover:border-[#C29B48] transition-all group">
              <div className="w-9 h-9 rounded-full bg-[#C29B48]/15 text-[#C29B48] mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <span className="block font-serif text-base sm:text-lg font-bold text-[#E8D4A2] mb-1">
                Fazendinha
              </span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider block">
                Mini Animais Dóceis
              </span>
            </div>

            {/* Card 4: Cinema 100" */}
            <div className="bg-[#14241A]/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#C29B48]/30 shadow-lg text-center hover:border-[#C29B48] transition-all group">
              <div className="w-9 h-9 rounded-full bg-[#C29B48]/15 text-[#C29B48] mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Film className="w-5 h-5" />
              </div>
              <span className="block font-serif text-base sm:text-lg font-bold text-[#E8D4A2] mb-1">
                Cinema 100"
              </span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider block">
                Ao Ar Livre
              </span>
            </div>
          </div>

          {/* Indicador DESCUBRA com Animação Fluida */}
          <div className="text-center">
            <a
              href="#experiencia"
              id="hero-scroll-indicator"
              aria-label="Rolar para a seção de experiência"
              className="inline-flex flex-col items-center gap-1.5 px-6 py-2 rounded-full text-[#14241A] hover:text-[#1c3224] transition-all cursor-pointer group"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#14241A] group-hover:tracking-[0.3em] transition-all">
                Descubra a Experiência
              </span>
              <div className="w-7 h-7 rounded-full bg-[#1c3224]/10 text-[#1c3224] flex items-center justify-center group-hover:bg-[#1c3224] group-hover:text-[#E8D4A2] transition-colors">
                <ChevronDown className="w-4 h-4 animate-bounce text-current" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
