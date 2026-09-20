import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 'horarios',
    question: 'Qual o horário de check-in e check-out?',
    answer: 'O check-in inicia às 15h e o check-out é até às 12h.',
  },
  {
    id: 'modalidades',
    question: 'Qual a diferença entre Temporada Express e Temporada Conforto?',
    answer:
      'Na Temporada Express, você leva seu enxoval e os alimentos que pretende consumir. Na Temporada Conforto, a acomodação é preparada com roupas de cama, mesa e banho conforme a modalidade contratada.',
  },
  {
    id: 'pet',
    question: 'Posso me hospedar com pet?',
    answer:
      'A Casa Pedacinho do Céu é a opção indicada para hóspedes que viajam com pet. Consulte as condições vigentes no momento da reserva.',
  },
  {
    id: 'reserva',
    question: 'Como consulto valores e disponibilidade?',
    answer:
      'Use qualquer botão “Ver disponibilidade” do site. Você será direcionado ao motor oficial de reservas para escolher as datas, consultar a tarifa disponível e concluir a reserva.',
  },
  {
    id: 'adicionais',
    question: 'As cestas e experiências extras estão incluídas na diária?',
    answer:
      'Não. Elas são adicionais opcionais e aparecem separadamente no site. Os valores e a disponibilidade de cada item devem ser confirmados para a sua estadia.',
  },
];

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('horarios');

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A2F]">
            Antes de reservar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14241A] mt-2 mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#526048]">
            O essencial para escolher a modalidade e seguir para a reserva.
          </p>
        </div>

        <div className="divide-y divide-[#E3D9CC] border-y border-[#E3D9CC]">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#14241A]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#8B6A2F] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 sm:pb-6 pr-8 text-sm text-[#526048] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
