import React, { useRef, useState } from 'react';
import { Bath, Compass, Film, Heart, Volume2, VolumeX } from 'lucide-react';
import { BookingButton } from './BookingButton';

interface HeroProps {
  onOpenBooking?: () => void;
  videoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ videoUrl }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="inicio" className="w-full bg-[#122118]">
      <div className="relative w-full h-[78vh] sm:h-[84vh] lg:h-[88vh] min-h-[560px] flex flex-col justify-end overflow-hidden">
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

          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#122118] via-[#122118]/70 to-transparent pointer-events-none" />
        </div>

        {videoUrl && (
          <button
            onClick={toggleMute}
            id="hero-toggle-audio-btn"
            aria-label={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
            className="absolute top-24 sm:top-28 right-4 sm:right-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer text-xs font-medium"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isMuted ? 'Ativar som' : 'Desativar som'}</span>
          </button>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pb-9 sm:pb-12 flex flex-col items-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-[#E8D4A2] mb-3">
            Spa em meio à natureza
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-semibold tracking-tight leading-[1.08] mb-3 drop-shadow-md">
            Cabana das Mansões
          </h1>

          <p className="text-sm sm:text-lg text-white/85 max-w-2xl mx-auto mb-6 leading-relaxed">
            Hidromassagem, cinema ao ar livre, fazendinha e três opções de hospedagem na Chácara das Mansões.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <BookingButton
              id="hero-reserve-btn"
              label="VER DISPONIBILIDADE"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            />

            <a
              href="#acomodacoes"
              id="hero-explore-accommodations-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 hover:border-white/40 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-[#C29B48]" />
              <span>Ver acomodações</span>
            </a>
          </div>

          <p className="mt-3 text-[11px] sm:text-xs text-white/65">
            Consulte datas e valores diretamente no motor de reservas.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#14241A] border-t border-white/10 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {[
            { icon: Bath, title: 'Hidromassagem', text: 'Espaços privativos' },
            { icon: Film, title: 'Cinema 100″', text: 'Ao ar livre' },
            { icon: Heart, title: 'Fazendinha', text: 'Mini animais' },
            { icon: Compass, title: 'Natureza', text: 'Áreas de descanso' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <Icon className="w-5 h-5 text-[#C29B48] mx-auto mb-2" />
              <strong className="block text-sm text-white font-semibold">{title}</strong>
              <span className="text-[11px] text-white/60">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
