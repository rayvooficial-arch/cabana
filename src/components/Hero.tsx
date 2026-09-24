import React, { useRef, useState } from 'react';
import { Bath, Compass, Film, Heart, Volume2, VolumeX } from 'lucide-react';
import { BookingButton } from './BookingButton';

interface HeroProps {
  onOpenBooking?: () => void;
  videoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ videoUrl = '/b0br9k.mp4' }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="inicio" className="w-full bg-[#122118]">
      <div className="relative w-full h-[80vh] sm:h-[86vh] lg:h-[90vh] min-h-[540px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {videoUrl ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full bg-[#1c3224]" aria-hidden="true" />
          )}

          {/* Degradês sutis para máxima nitidez e destaque do vídeo */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#122118] via-[#122118]/40 to-transparent pointer-events-none" />
        </div>

        {videoUrl && (
          <button
            onClick={toggleMute}
            id="hero-toggle-audio-btn"
            aria-label={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
            className="absolute top-24 sm:top-28 right-4 sm:right-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer text-xs font-medium shadow-lg"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isMuted ? 'Ativar som' : 'Desativar som'}</span>
          </button>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pb-8 sm:pb-10 flex flex-col items-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#E8D4A2] mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Spa em meio à natureza
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF7F2] font-semibold tracking-tight leading-[1.08] mb-3 drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]">
            Cabana das Mansões
          </h1>

          <p className="text-sm sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Hidromassagem, cinema ao ar livre, fazendinha e três opções de hospedagem na Chácara das Mansões.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#14241A] border-t border-white/10 px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-5xl mx-auto">
          {/* Botões de Ação (Disponibilidade e Acomodações) posicionados acima dos demais componentes */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-9">
            <BookingButton
              id="hero-reserve-btn"
              label="VER DISPONIBILIDADE"
              variant="gold"
              size="md"
              className="w-full sm:w-auto px-8 py-3.5 shadow-lg shadow-black/30 text-xs sm:text-sm"
            />

            <a
              href="#acomodacoes"
              id="hero-explore-accommodations-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 hover:border-white/40 font-semibold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md"
            >
              <Compass className="w-4 h-4 text-[#C29B48]" />
              <span>Ver acomodações</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {[
              { icon: Bath, title: 'Hidromassagem', text: 'Espaços privativos' },
              { icon: Film, title: 'Cinema 100″', text: 'Ao ar livre' },
              { icon: Heart, title: 'Fazendinha', text: 'Mini animais' },
              { icon: Compass, title: 'Natureza', text: 'Áreas de descanso' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:border-white/20 transition-colors">
                <Icon className="w-5 h-5 text-[#C29B48] mx-auto mb-2" />
                <strong className="block text-sm text-white font-semibold">{title}</strong>
                <span className="text-[11px] text-white/60">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
