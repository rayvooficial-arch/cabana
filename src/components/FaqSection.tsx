import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { createInstitutionalSupportLink, trackInstitutionalContactClick } from '../utils/whatsapp';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'horarios',
    question: 'Qual o horário de check-in e check-out?',
    answer:
      'Nosso check-in inicia às 15h00 e o check-out é até às 12h00. Esse intervalo nos permite higienizar rigorosamente cada espaço e preparar o enxoval 600 fios impecável para você.',
  },
  {
    id: 'pet-friendly',
    question: 'Posso levar meu pet de estimação?',
    answer:
      'Com certeza! A Casa Pedacinho do Céu é 100% Pet Friendly, com área verde ampla e cercada para seu cãozinho correr com total liberdade e segurança.',
  },
  {
    id: 'alimentacao',
    question: 'O que preciso levar para comer? O que já está incluso na despensa?',
    answer:
      'Você já encontra na cozinha alimentos não perecíveis essenciais (arroz, feijão, macarrão, café, chá, açúcar, sal, azeite de oliva extravirgem, vinagre balsâmico e temperos), além de ovos caipiras frescos do galinheiro local. Você só precisa trazer suas carnes para a churrasqueira ou fogão a lenha, queijos, bebidas e o que mais desejar.',
  },
  {
    id: 'hidromassagem',
    question: 'A hidromassagem é privativa e aquecida?',
    answer:
      'Sim, cada acomodação possui sua hidromassagem privativa e aquecida. Já deixamos preparados sais de banho, espuma aromática e toalhas felpudas para seu momento de spa.',
  },
  {
    id: 'pagamento',
    question: 'Como funciona o pagamento e parcelamento?',
    answer:
      'A reserva é garantida com um sinal antecipado, e o valor restante pode ser acertado no check-in. Aceitamos cartões com opção de parcelamento (conforme as taxas da maquininha). Sem taxas extras ocultas de limpeza.',
  },
  {
    id: 'criancas',
    question: 'A hospedagem é adequada para crianças? Tem berço?',
    answer:
      'Muito adequada! As crianças adoram interagir com os animais da fazendinha, colher frutas no pomar e assistir a filmes no cinema ao ar livre com telão de 100". Disponibilizamos berço sob solicitação prévia gratuita.',
  },
  {
    id: 'cinema',
    question: 'Como funciona o cinema ao ar livre?',
    answer:
      'Temos uma estrutura especial de cinema ao ar livre com telão de 100" e projetor de alta definição em meio à natureza, além de pipoqueira elétrica na cozinha para noites inesquecíveis.',
  },
  {
    id: 'reserva',
    question: 'Como faço para consultar as datas e reservar?',
    answer:
      'Basta clicar nos botões "Reservar Agora" ou "Ver Disponibilidade" para acessar nosso motor de reservas online, selecionar as datas desejadas e garantir sua cabana com confirmação imediata e transparente.',
  },
];

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('horarios');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleSupportClick = () => {
    trackInstitutionalContactClick('faq_section');
    window.open(createInstitutionalSupportLink('Dúvidas Gerais'), '_blank');
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Transparência total para que sua única preocupação seja aproveitar dias inesquecíveis no campo.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl border border-[#E3D9CC] overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  id={`faq-toggle-${faq.id}`}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#14241A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#1c3224]/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1c3224] text-white' : 'text-[#1c3224]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#526048] leading-relaxed border-t border-[#FAF7F2] pt-3 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA Card */}
        <div className="bg-[#F3ECE2] border border-[#E8DED1] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-lg sm:text-xl text-[#14241A]">
              Ficou com alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#526048]">
              Estamos online no WhatsApp para atender você com toda a atenção e rapidez.
            </p>
          </div>

          <button
            onClick={handleSupportClick}
            id="faq-support-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#C29B48]" />
            <span>Contato Institucional</span>
          </button>
        </div>
      </div>
    </section>
  );
};
