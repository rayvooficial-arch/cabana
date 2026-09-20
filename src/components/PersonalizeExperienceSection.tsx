import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  Coffee,
  Heart,
  Gift,
  Check,
  Eye,
  X,
  ArrowRight,
  Wine,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import { EXPERIENCES_AND_BASKETS, ExperienceAddon } from '../data/commercial';
import { BookingButton } from './BookingButton';

export const PersonalizeExperienceSection: React.FC = () => {
  const [selectedBasketForDetails, setSelectedBasketForDetails] = useState<ExperienceAddon | null>(null);

  const fogareiro = EXPERIENCES_AND_BASKETS.find((e) => e.id === 'fogareiro-premium')!;
  const otherBaskets = EXPERIENCES_AND_BASKETS.filter((e) => e.id !== 'fogareiro-premium');

  return (
    <section id="personalize-experiencia" className="py-24 bg-[#F3ECE2] text-[#2C332D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Cestas & Adicionais Especiais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Personalize Sua Experiência
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-[#8B5A2B] mb-3">
            “Alguns momentos merecem um cuidado a mais.”
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#526048] max-w-xl mx-auto">
            Adicione afeto, gastronomia e momentos inesquecíveis à sua estadia. Escolha as cestas e vivências preparadas com todo o carinho para a sua chegada.
          </p>
        </div>

        {/* 1. Destaque Especial e Emocional: Experiência Fogareiro Premium */}
        <div
          id="spotlight-fogareiro-premium"
          className="mb-14 rounded-3xl bg-gradient-to-br from-[#14241A] via-[#1c3224] to-[#14241A] text-white p-7 sm:p-10 lg:p-12 border border-[#C29B48]/50 shadow-2xl relative overflow-hidden"
        >
          {/* Luz de fundo aconchegante */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#C29B48]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Coluna Esquerda: Narrativa Emocional */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 border border-[#C29B48]/40 text-[#E8D4A2] text-xs font-semibold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-[#C29B48]" />
                <span>Experiência Exclusiva</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {fogareiro.name}
              </h3>

              <p className="font-serif italic text-lg sm:text-xl text-[#E8D4A2] leading-relaxed">
                “{fogareiro.emotionalCopy}”
              </p>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {fogareiro.subtitle} Imagine a noite caindo em meio à calma da mata, o som suave da lenha crepitando, uma taça de vinho na mão e o calor do fogo acolhendo quem você ama.
              </p>

              {/* Itens do Fogareiro em Pílulas Sofisticadas */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C29B48] block mb-2.5">
                  A cesta do fogareiro inclui:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/85">
                  {fogareiro.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C29B48] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita: Caixa de Valor & Ação */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C29B48]" />
                    {fogareiro.forGuests}
                  </span>
                  <span className="text-[#E8D4A2] font-semibold">Momento a Dois</span>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-white/60 block">
                    Valor da Experiência:
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#E8D4A2]">
                    R$ {fogareiro.price?.toLocaleString('pt-BR')}
                  </div>
                  <span className="text-[11px] text-white/60 block mt-1">
                    Preparada e entregue no ponto para a sua noite
                  </span>
                </div>
              </div>

              <BookingButton
                id="cta-fogareiro-premium"
                label={fogareiro.ctaText || 'QUERO ADICIONAR ESSA EXPERIÊNCIA'}
                variant="gold"
                size="md"
                className="w-full py-4 text-xs font-bold uppercase tracking-wider shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* 2. Grid das Demais Cestas de Café e Boas-Vindas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherBaskets.map((basket) => {
            const hasCategories = !!basket.categories && basket.categories.length > 0;
            const hasItems = !!basket.items && basket.items.length > 0;
            const hasExtraItems = !!basket.extraItems && basket.extraItems.length > 0;

            return (
              <div
                key={basket.id}
                id={`card-basket-${basket.id}`}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DED1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1c3224] px-2.5 py-0.5 rounded-full bg-[#F3ECE2] border border-[#E8DED1]">
                      {basket.forGuests}
                    </span>
                    {basket.price ? (
                      <span className="font-serif text-base font-bold text-[#14241A]">
                        R$ {basket.price}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-[#8B5A2B] px-2 py-0.5 rounded-md bg-[#FAF7F2]">
                        {basket.priceFormatted || 'Sob consulta'}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#14241A] mb-1">
                    {basket.name}
                  </h3>

                  <p className="text-xs text-[#8B5A2B] font-serif italic mb-2">
                    “{basket.emotionalCopy}”
                  </p>

                  <p className="text-xs text-[#526048] leading-relaxed mb-4">
                    {basket.subtitle}
                  </p>

                  {/* Prévia de Itens ou Nota Oficial */}
                  {hasItems && (
                    <div className="mb-4 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DED1]">
                      <span className="text-[11px] font-bold text-[#14241A] uppercase tracking-wider block mb-1.5">
                        Principais itens:
                      </span>
                      <ul className="space-y-1 text-xs text-[#526048]">
                        {basket.items?.slice(0, 4).map((it, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#C29B48] shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                        {(basket.items?.length || 0) > 4 && (
                          <li className="text-[11px] text-[#C29B48] font-medium pt-0.5">
                            + {basket.items!.length - 4} outros itens inclusos
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {hasCategories && (
                    <div className="mb-4 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DED1]">
                      <span className="text-[11px] font-bold text-[#14241A] uppercase tracking-wider block mb-1.5">
                        Mesa Farta & Artesanal:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {basket.categories?.map((cat, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E8DED1] text-[#1c3224] font-medium"
                          >
                            {cat.categoryTitle}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {hasExtraItems && (
                    <div className="mb-4 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DED1]">
                      <span className="text-[11px] font-bold text-[#14241A] uppercase tracking-wider block mb-1.5">
                        Itens nobres inclusos:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Café da Cabana Completo', 'Queijo Brie', 'Salame Italiano', 'Waffles/Panquecas', 'Mix de Castanhas'].map((item, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E8DED1] text-[#1c3224] font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {basket.note && (
                    <p className="text-xs text-[#526048] italic bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DED1] mb-4">
                      {basket.note}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E8DED1] space-y-2">
                  {(hasCategories || hasExtraItems || (hasItems && basket.items!.length > 4)) && (
                    <button
                      onClick={() => setSelectedBasketForDetails(basket)}
                      id={`view-basket-details-${basket.id}`}
                      className="w-full py-2 text-center text-xs font-semibold text-[#1c3224] hover:text-[#C29B48] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C29B48]" />
                      <span>Ver tudo que vem na cesta</span>
                    </button>
                  )}

                  <BookingButton
                    id={`add-basket-cta-${basket.id}`}
                    label={basket.price ? 'ADICIONAR À ESTADIA' : 'CONSULTAR VALOR'}
                    variant="outline"
                    size="sm"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de Detalhes da Cesta Completa */}
      {selectedBasketForDetails && (
        <div
          id="basket-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBasketForDetails(null);
          }}
        >
          <div
            id="basket-detail-modal-card"
            className="bg-[#FAF7F2] text-[#2C332D] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#C29B48]/40 flex flex-col relative animate-in zoom-in-95 duration-200 my-auto"
          >
            {/* Header Modal */}
            <div className="bg-[#14241A] text-white p-6 sm:p-7 relative border-b border-[#C29B48]/30">
              <button
                onClick={() => setSelectedBasketForDetails(null)}
                id="close-basket-modal-btn"
                aria-label="Fechar Detalhes da Cesta"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 border border-[#C29B48]/40 text-[#E8D4A2] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <UtensilsCrossed className="w-3 h-3 text-[#C29B48]" />
                <span>{selectedBasketForDetails.forGuests}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                {selectedBasketForDetails.name}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 font-light mt-1">
                {selectedBasketForDetails.price
                  ? `R$ ${selectedBasketForDetails.price} • `
                  : 'Valor sob consulta • '}
                {selectedBasketForDetails.subtitle}
              </p>
            </div>

            {/* Conteúdo Completo */}
            <div className="p-6 sm:p-7 space-y-4 max-h-[65vh] overflow-y-auto">
              {/* Categorias (se existirem, como no Café da Cabana) */}
              {selectedBasketForDetails.categories?.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E8DED1]">
                  <strong className="text-xs uppercase tracking-wider text-[#14241A] font-bold block mb-2 text-[#C29B48]">
                    {cat.categoryTitle}
                  </strong>
                  <ul className="space-y-1 text-xs text-[#526048]">
                    {cat.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Itens Simples */}
              {selectedBasketForDetails.items && !selectedBasketForDetails.categories && (
                <div className="p-4 rounded-2xl bg-white border border-[#E8DED1]">
                  <strong className="text-xs uppercase tracking-wider text-[#14241A] font-bold block mb-2">
                    Todos os itens incluídos:
                  </strong>
                  <ul className="space-y-1.5 text-xs text-[#526048]">
                    {selectedBasketForDetails.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Itens Extras (Café Colonial) */}
              {selectedBasketForDetails.extraItems && (
                <div className="p-4 rounded-2xl bg-white border border-[#E8DED1]">
                  <strong className="text-xs uppercase tracking-wider text-[#14241A] font-bold block mb-2 text-[#C29B48]">
                    Composição da Cesta:
                  </strong>
                  <ul className="space-y-1.5 text-xs text-[#526048]">
                    {selectedBasketForDetails.extraItems.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedBasketForDetails(null)}
                  id="close-basket-modal-bottom-btn"
                  className="px-6 py-2.5 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
