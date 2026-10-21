export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const DEFAULT_FAQS: FaqItem[] = [
  {
    id: 'horarios',
    question: 'Qual o horário de check-in e check-out?',
    answer:
      'O check-in é às 15h e o check-out é às 12h. São 21 horas de uso de toda a hospedagem, além da infraestrutura de toda a chácara, com 1 hectare.',
  },
  {
    id: 'areas-compartilhadas',
    question: 'O tanque de peixes e o cinema são privativos?',
    answer:
      'O deck do tanque de peixes e algumas outras áreas externas da propriedade também ficam disponíveis para os demais hóspedes. O cinema ao ar livre fica em uma área compartilhada. Dependendo do momento da hospedagem, é bem possível que vocês consigam aproveitar o espaço somente com a própria companhia, mas não conseguimos garantir exclusividade.',
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
      'Sim. A Cabana Éden, a Cabana Manancial e a Casa Pedacinho do Céu aceitam pets, seguindo as regras e condições informadas no momento da reserva.',
  },
  {
    id: 'reserva',
    question: 'Como consulto valores e disponibilidade?',
    answer:
      'Use qualquer botão “Escolher datas” do site, preencha os dados da estadia e continue pelo WhatsApp com uma mensagem pronta para consultar a disponibilidade e concluir a reserva com nossa equipe.',
  },
  {
    id: 'adicionais',
    question: 'As cestas e experiências extras estão incluídas na diária?',
    answer:
      'Não. Elas são adicionais opcionais e aparecem separadamente no site. Os valores e a disponibilidade de cada item devem ser confirmados para a sua estadia.',
  },
];

