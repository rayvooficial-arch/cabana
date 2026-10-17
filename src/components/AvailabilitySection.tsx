import React from 'react';
import { CalendarCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { PUBLIC_AVAILABILITY_URL } from '../config/constants';

export const AvailabilitySection: React.FC = () => (
  <section id="disponibilidade" className="bg-[#FAF7F2] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
    <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[#C7A65A]/50 bg-[#14241A] text-white shadow-lg">
      <div className="grid gap-6 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D7B86A]/15 text-[#E8D4A2]">
            <CalendarCheck className="h-6 w-6" />
          </span>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E8D4A2]">
              Agenda atualizada
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
              Consulte as noites disponíveis
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Veja a disponibilidade da Cabana Éden, Cabana Manancial e Casa Pedacinho do Céu antes de escolher as datas da sua estadia.
            </p>
            <p className="mt-3 flex items-start gap-2 text-xs text-white/60">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D7B86A]" />
              A reserva é confirmada após o atendimento pelo WhatsApp.
            </p>
          </div>
        </div>

        <a
          href={PUBLIC_AVAILABILITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D7B86A] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-[#14241A] shadow-md transition-colors hover:bg-[#E8D4A2] lg:w-auto"
        >
          Ver agenda de disponibilidade
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

