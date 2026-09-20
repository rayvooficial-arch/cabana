/**
 * CONFIGURAÇÃO CENTRAL DO MOTOR DE RESERVAS EXTERNO
 * 
 * Cabana das Mansões
 * 
 * Esta é a única fonte da verdade para o motor de reservas online.
 * Quando o link oficial for fornecido, basta preencher a propriedade `url` abaixo.
 * Todos os botões e links de reserva em todo o site utilizarão automaticamente esta configuração.
 */

export interface BookingEngineConfig {
  /**
   * URL oficial do motor de reservas externo.
   * Exemplo futuro: "https://reservas.cabanadasmansoes.com.br"
   * Enquanto estiver vazio (""), o sistema opera em modo seguro sem redirecionamento externo.
   */
  url: string;

  /**
   * Status de ativação da integração.
   * Alterne para `true` assim que a URL for inserida e testada.
   */
  enabled: boolean;
}

export const BOOKING_CONFIG: BookingEngineConfig = {
  // ATENÇÃO: Insira aqui a URL oficial do motor de reservas quando fornecida.
  // Nenhum outro arquivo precisa ser alterado para ativar o novo motor.
  url: '',
  enabled: false,
};
