/**
 * CONFIGURAÇÃO CENTRAL DO MOTOR DE RESERVAS
 *
 * Cabana das Mansões
 *
 * Todos os botões de disponibilidade e reserva do site utilizam esta
 * configuração. A URL deve apontar sempre para o endereço oficial fornecido
 * pela propriedade.
 */

export interface BookingEngineConfig {
  /** URL oficial do motor de reservas externo. */
  url: string;

  /** Permite desativar temporariamente os redirecionamentos sem remover a URL. */
  enabled: boolean;
}

export const BOOKING_CONFIG: BookingEngineConfig = {
  url: 'https://reservas.bitzsoftwares.com.br/166f56b8-0b7c-4343-affe-3517c530537c/',
  enabled: true,
};
