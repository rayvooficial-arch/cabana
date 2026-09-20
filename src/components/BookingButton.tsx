import React from 'react';
import { Calendar } from 'lucide-react';
import { openBookingEngine, BookingEngineParams } from '../utils/booking';

export interface BookingButtonProps {
  /**
   * Texto a ser exibido no botão.
   * Padrão: "RESERVAR AGORA"
   */
  label?: string;

  /**
   * Identificador interno da acomodação para rastreamento e futura passagem de parâmetro.
   */
  accommodationId?: string;

  /**
   * Nome legível da acomodação (ex: "Cabana Éden").
   */
  accommodationName?: string;

  /**
   * Parâmetros adicionais para futura integração (datas, hóspedes, código de pacote).
   */
  params?: BookingEngineParams;

  /**
   * Estilo visual do botão.
   */
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'nav' | 'compact';

  /**
   * Tamanho do botão.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Se deve ou não exibir o ícone de calendário.
   */
  showIcon?: boolean;

  /**
   * Classes adicionais de Tailwind CSS.
   */
  className?: string;

  /**
   * ID único para o elemento HTML (obrigatório para acessibilidade e testes).
   */
  id?: string;

  /**
   * Callback opcional executado antes do redirecionamento (ex: fechar modais abertos).
   */
  onClick?: () => void;

  /**
   * Conteúdo customizado interno (se fornecido, substitui o label padrão).
   */
  children?: React.ReactNode;
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  label = 'RESERVAR AGORA',
  accommodationId,
  accommodationName,
  params,
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className = '',
  id,
  onClick,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    openBookingEngine({
      accommodationId,
      accommodationName,
      ...params,
    });
  };

  // Variações de estilo
  let variantClasses = '';
  switch (variant) {
    case 'gold':
      variantClasses =
        'bg-gradient-to-r from-[#C29B48] to-[#D8B466] hover:from-[#d6af57] hover:to-[#e4c278] text-[#14241A] font-bold shadow-xl hover:shadow-[#C29B48]/30 hover:scale-[1.02] active:scale-[0.98] ring-2 ring-[#C29B48]/40 ring-offset-2 ring-offset-[#122118]';
      break;
    case 'secondary':
      variantClasses =
        'bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 hover:border-white/40 font-semibold backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]';
      break;
    case 'outline':
      variantClasses =
        'bg-white hover:bg-[#F3ECE2] text-[#14241A] border border-[#C29B48] font-bold shadow-sm hover:scale-[1.01] active:scale-[0.98]';
      break;
    case 'nav':
      variantClasses =
        'bg-[#C29B48] hover:bg-[#d6af57] text-[#14241A] font-semibold uppercase tracking-wider shadow-lg shadow-black/20 hover:shadow-[#C29B48]/30 hover:scale-[1.02] active:scale-[0.98]';
      break;
    case 'compact':
      variantClasses =
        'bg-[#C29B48] hover:bg-[#d6af57] text-[#14241A] font-bold shadow-md hover:scale-105 active:scale-95';
      break;
    case 'primary':
    default:
      variantClasses =
        'bg-gradient-to-r from-[#1c3224] to-[#2d4f3b] hover:from-[#2d4f3b] hover:to-[#3e6850] text-[#FAF7F2] font-bold shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]';
      break;
  }

  // Tamanhos
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'px-4 py-2 text-xs rounded-xl';
      break;
    case 'lg':
      sizeClasses = 'px-8 sm:px-10 py-4 text-xs sm:text-sm uppercase tracking-wider rounded-full';
      break;
    case 'md':
    default:
      sizeClasses = 'px-6 py-3.5 text-xs uppercase tracking-wider rounded-2xl';
      break;
  }

  const generatedId =
    id ||
    (accommodationId
      ? `booking-btn-${accommodationId}`
      : `booking-btn-${label.toLowerCase().replace(/\s+/g, '-')}`);

  return (
    <button
      id={generatedId}
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {showIcon && <Calendar className="w-4 h-4 shrink-0" />}
      <span>{children || label}</span>
    </button>
  );
};
