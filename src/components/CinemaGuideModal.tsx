import React from 'react';
import {
  X,
  Tv,
  Power,
  Sliders,
  Wifi,
  Film,
  PlaySquare,
  Smartphone,
  Cast,
  Volume2,
  Sparkles,
  AlertTriangle,
  Heart,
  Check,
} from 'lucide-react';
import { CINEMA_GUIDE } from '../data/commercial';

interface CinemaGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CinemaGuideModal: React.FC<CinemaGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="cinema-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="cinema-guide-modal-card"
        className="bg-[#FAF7F2] text-[#2C332D] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#C29B48]/40 flex flex-col relative my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Header Elegante */}
        <div className="bg-[#14241A] text-white p-6 sm:p-7 relative border-b border-[#C29B48]/30 shrink-0">
          <button
            onClick={onClose}
            id="close-cinema-guide-btn"
            aria-label="Fechar Guia"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 border border-[#C29B48]/40 text-[#E8D4A2] text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Tv className="w-3 h-3 text-[#C29B48]" />
            <span>{CINEMA_GUIDE.subtitle}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {CINEMA_GUIDE.title}
          </h3>

          <p className="text-xs sm:text-sm text-white/80 font-light mt-1.5 leading-relaxed">
            {CINEMA_GUIDE.welcome}
          </p>
        </div>

        {/* Corpo com Rolagem Limpa e Instruções Práticas */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* 1. Como ligar */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Power className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                1. Como ligar o projetor
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#526048] pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#C29B48] font-bold">•</span>
                <span>Conecte o cabo de energia do Freestyle à tomada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C29B48] font-bold">•</span>
                <span>Ligue pelo controle remoto ou pelo botão no próprio aparelho.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C29B48] font-bold">•</span>
                <span>Aponte para a parede ou tela de projeção.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C29B48] font-bold">•</span>
                <span>Aguarde o foco automático e o ajuste de keystone da imagem.</span>
              </li>
            </ul>
            <div className="mt-3 p-2.5 rounded-xl bg-[#F3ECE2] text-[11px] text-[#14241A] flex items-start gap-2 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B48] shrink-0 mt-0.5" />
              <span>
                <strong>Dica de imagem:</strong> Quanto mais longe estiver da tela, maior a imagem. Para imagem próxima de 100 polegadas, posicione o aparelho aproximadamente entre 2,5 e 2,7 metros de distância.
              </span>
            </div>
          </div>

          {/* 2. Ajuste de imagem */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Sliders className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                2. Ajustar a imagem
              </h4>
            </div>
            <p className="text-xs text-[#526048] mb-2 font-mono bg-[#FAF7F2] p-2 rounded-lg border border-[#E8DED1]">
              Home → Todas as configurações → Configurações do projetor
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {['Foco', 'Keystone', 'Escala e mover tela', 'Modo de projeção'].map((opt, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[#F3ECE2] text-[#1c3224] font-medium">
                  {opt}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-[#526048] italic">
              Ambientes mais escuros proporcionam a melhor e mais rica experiência de cinema.
            </p>
          </div>

          {/* 3. Conectar ao Wi-Fi */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Wifi className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                3. Conectar ao Wi-Fi
              </h4>
            </div>
            <p className="text-xs text-[#526048] font-mono bg-[#FAF7F2] p-2 rounded-lg border border-[#E8DED1]">
              Home → Configurações → Conexão → Rede → Abrir configurações de rede → Escolher Wi-Fi → Inserir senha → Conectar
            </p>
          </div>

          {/* 4. Assistir Netflix */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Film className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                4. Assistir Netflix
              </h4>
            </div>
            <p className="text-xs text-[#526048] font-mono bg-[#FAF7F2] p-2 rounded-lg border border-[#E8DED1] mb-2">
              Home → Apps → Netflix → Acessar conta disponível → Escolher conteúdo
            </p>
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-center gap-2 font-medium">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Por segurança e privacidade, não altere as configurações da conta.</span>
            </div>
          </div>

          {/* 5. Assistir YouTube */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <PlaySquare className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                5. Assistir YouTube
              </h4>
            </div>
            <p className="text-xs text-[#526048] font-mono bg-[#FAF7F2] p-2 rounded-lg border border-[#E8DED1]">
              Home → Apps → YouTube → Escolher conteúdo (ou transmitir diretamente pelo celular)
            </p>
          </div>

          {/* 6. Transmitir celular (Smart View) */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                6. Transmitir do celular (Smart View - Samsung)
              </h4>
            </div>
            <ul className="space-y-1 text-xs text-[#526048] pl-2 mb-2">
              <li>• Celular e Freestyle devem estar conectados na mesma rede Wi-Fi.</li>
              <li>• No seu celular Samsung, abra o <strong>Smart View</strong>.</li>
              <li>• Selecione <strong>Samsung The Freestyle</strong> na lista.</li>
              <li>• Confirme a conexão na tela.</li>
            </ul>
            <p className="text-[10px] text-stone-500 italic">
              Aviso: Alguns aplicativos de streaming com direitos autorais bloqueiam espelhamento direto. Nesse caso, abra o aplicativo instalado diretamente no Freestyle.
            </p>
          </div>

          {/* 7. Transmissão YouTube celular */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Cast className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                7. Transmitir YouTube do celular
              </h4>
            </div>
            <p className="text-xs text-[#526048] leading-relaxed">
              Abra o YouTube no Freestyle e no celular. Ao escolher um vídeo, toque no ícone de <strong>Transmitir</strong> e selecione o Freestyle. Seu celular atuará como controle prático.
            </p>
          </div>

          {/* 8. Som Bluetooth */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8DED1] shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0">
                <Volume2 className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                8. Configurar o som (Caixa Bluetooth)
              </h4>
            </div>
            <p className="text-xs text-[#526048] font-mono bg-[#FAF7F2] p-2 rounded-lg border border-[#E8DED1]">
              Home → Configurações → Som → Saída de som → Selecionar dispositivo Bluetooth
            </p>
          </div>

          {/* 9. Dicas para uma experiência especial */}
          <div className="p-4.5 rounded-2xl bg-[#F3ECE2] border border-[#E3D9CC]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C29B48]" />
              <h4 className="font-serif text-base font-bold text-[#14241A]">
                9. Dicas para uma experiência especial
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C332D]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                <span>Apague as luzes próximas à tela</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                <span>Prepare a pipoca na pipoqueira</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                <span>Acomode-se confortavelmente</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1c3224] shrink-0" />
                <span>Coloque o celular no silencioso</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#E3D9CC] text-xs font-serif italic text-[#14241A]">
              “O Freestyle pode ser apontado para o teto para criar uma experiência mágica enquanto você assiste deitado confortavelmente.”
            </div>
          </div>

          {/* 10. Cuidados com o equipamento (Área visualmente destacada e clara) */}
          <div className="p-5 rounded-2xl bg-[#14241A] text-white border border-[#C29B48]/50 shadow-md">
            <div className="flex items-center gap-2 mb-3 text-[#E8D4A2]">
              <AlertTriangle className="w-4 h-4 text-[#C29B48]" />
              <h4 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                10. Cuidados com o Equipamento
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-white/80 pl-2 mb-4">
              <li>• Não mover o projetor durante o funcionamento.</li>
              <li>• Não cobrir as entradas de ventilação.</li>
              <li>• Não colocar líquidos próximo ao aparelho.</li>
              <li>• Não tocar diretamente na lente de projeção.</li>
              <li>• Não desconectar cabos puxando pelo fio.</li>
              <li>• Desligar sempre pelo controle remoto.</li>
              <li>• Aguardar o aparelho finalizar o desligamento antes de retirar da tomada.</li>
              <li>• Não alterar configurações avançadas do sistema.</li>
            </ul>
            <div className="pt-3 border-t border-white/10 text-center font-serif">
              <span className="text-sm font-bold text-[#E8D4A2] block">Bom filme!</span>
              <span className="text-xs text-white/70 italic mt-0.5 block">
                Cinema das Mansões — Descanse. Conecte-se. Viva momentos especiais.
              </span>
            </div>
          </div>

          {/* Botão de Fechar */}
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              id="cinema-guide-bottom-close-btn"
              className="px-8 py-3 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md"
            >
              Fechar Guia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
