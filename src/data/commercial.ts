/**
 * FONTE ÚNICA DA VERDADE — DADOS COMERCIAIS DA CABANA DAS MANSÕES
 * 
 * Centralização oficial de:
 * 1. Modalidades de Hospedagem (Temporada Express × Temporada Conforto)
 * 2. Enxovais Completos (Cabanas e Casa Pedacinho do Céu)
 * 3. Experiências, Cestas e Adicionais (Upsell elegante)
 * 4. Tarifas Sazonais & Pacotes Especiais (Natal, Réveillon, Janeiro 2027)
 * 5. Guia Samsung The Freestyle (Cinema das Mansões)
 * 
 * Regra estrita: Sem preços inventados ou deduções fictícias.
 */

export interface StayModePricing {
  weekday: number | null;
  weekend: number | null;
  statusText?: string;
  appliesTo: string;
}

export interface StayMode {
  id: 'express' | 'conforto';
  name: string;
  tagline: string;
  concept: string;
  explanation: string;
  guestMustBring: string[];
  providedForArrival?: string[];
  includedItems?: string[];
  optionalNote?: string;
  pricing: {
    cabanas: StayModePricing;
    casa: StayModePricing;
  };
}

export const STAY_MODES: Record<'express' | 'conforto', StayMode> = {
  express: {
    id: 'express',
    name: 'Temporada Express',
    tagline: 'Economize trazendo seu próprio enxoval',
    concept: 'Uma opção mais econômica para você aproveitar toda a nossa estrutura, com liberdade e praticidade.',
    explanation:
      'Na Temporada Express, o hóspede encontrará tudo limpo, organizado, equipado e pronto para recebê-lo. Por ser uma modalidade mais econômica, alguns itens pessoais/enxoval devem ser levados pelo próprio hóspede.',
    guestMustBring: [
      'Roupas de cama',
      'Roupas de banho',
      'Roupas de mesa',
      'Alimentos e bebidas que desejar consumir',
    ],
    providedForArrival: [
      '2 rolos de papel higiênico',
      '1 litro de óleo de cozinha',
      'Açúcar',
      'Sal',
      'Café em pó',
      'Detergente',
      'Esponja',
    ],
    pricing: {
      cabanas: {
        weekday: 890,
        weekend: 1090,
        appliesTo: 'Cabana Éden & Cabana Manancial',
      },
      casa: {
        weekday: 1350,
        weekend: 1690,
        appliesTo: 'Casa Pedacinho do Céu',
      },
    },
  },
  conforto: {
    id: 'conforto',
    name: 'Temporada Conforto',
    tagline: 'Chegue e encontre tudo preparado',
    concept: 'Chegue, abra a porta e simplesmente descanse.',
    explanation:
      'Na Temporada Conforto, você não precisa se preocupar com enxoval. Nós entregamos tudo limpo, organizado, equipado e pronto para receber você.',
    includedItems: [
      'Roupas de cama',
      'Roupas de mesa',
      'Roupas de banho',
      'Itens essenciais para o conforto',
      'Amenities de boas-vindas',
      'Toda a estrutura da propriedade pronta para uso',
      'Ambiente preparado para aproveitar e descansar',
    ],
    guestMustBring: [
      'Alimentos perecíveis',
      'Itens pessoais',
    ],
    optionalNote:
      'Se quiser tornar a estadia ainda mais especial, existem kits, cestas e experiências opcionais disponíveis.',
    pricing: {
      cabanas: {
        weekday: 1010,
        weekend: 1210,
        appliesTo: 'Cabana Éden & Cabana Manancial',
      },
      casa: {
        weekday: 1530,
        weekend: 1870,
        appliesTo: 'Casa Pedacinho do Céu',
      },
    },
  },
};

export interface LinenKit {
  id: string;
  title: string;
  appliesTo: string;
  items: string[];
}

export const LINEN_KITS: Record<'cabanas' | 'casa', LinenKit> = {
  cabanas: {
    id: 'linen-cabanas',
    title: 'Kit Roupas de Cama, Mesa e Banho — Cabanas',
    appliesTo: 'Cabana Éden & Cabana Manancial',
    items: [
      '1 conjunto de cobre-leito Queen — 3 peças',
      '1 conjunto de lençol Queen 1200 fios — 4 peças',
      '2 conjuntos de lençol de solteiro — 4 peças',
      '1 toalha de mesa — 1 metro de diâmetro',
      '4 toalhas de banho',
      '2 toalhas extras de banho',
      '2 toalhas de rosto',
      '1 coberta Queen',
      '2 cobertas casal comum',
      '1 pano de prato',
      '2 tapetes de chão',
      '1 item para tampa do vaso sanitário',
      '2 roupões',
    ],
  },
  casa: {
    id: 'linen-casa',
    title: 'Kit Roupas de Cama, Mesa e Banho — Casa Pedacinho do Céu',
    appliesTo: 'Casa Pedacinho do Céu',
    items: [
      '2 conjuntos de cobre-leito Queen — 3 peças cada',
      '2 conjuntos de lençol 1200 fios casal comum — 4 peças',
      '4 conjuntos de lençol de solteiro — 4 peças',
      '1 toalha de mesa — 2 metros de comprimento',
      '8 toalhas de banho',
      '4 toalhas de rosto',
      '4 cobertas casal comum',
      '2 panos de prato',
      '2 tapetes de chão',
      '1 item para tampa do vaso sanitário',
      '4 roupões',
    ],
  },
};

export interface BasketCategory {
  categoryTitle: string;
  items: string[];
}

export interface ExperienceAddon {
  id: string;
  name: string;
  emotionalCopy: string;
  subtitle?: string;
  price: number | null;
  priceFormatted?: string;
  forGuests: string;
  isHighlight?: boolean;
  ctaText?: string;
  items?: string[];
  categories?: BasketCategory[];
  extraItems?: string[];
  note?: string;
}

export const EXPERIENCES_AND_BASKETS: ExperienceAddon[] = [
  {
    id: 'fogareiro-premium',
    name: 'Experiência Fogareiro Premium',
    emotionalCopy:
      'Uma noite ao redor do fogo, acompanhada de vinho, frios, frutas, chocolate e marshmallows.',
    subtitle:
      'Uma experiência criada para tornar sua noite na Cabana das Mansões ainda mais especial.',
    price: 300,
    forGuests: 'Para 2 pessoas',
    isHighlight: true,
    ctaText: 'QUERO ADICIONAR ESSA EXPERIÊNCIA',
    items: [
      'Vinho suave OU espumante — 375 ml',
      'Tábua de frios selecionados',
      'Queijo Brie',
      'Salame',
      'Torradinhas artesanais',
      'Frutas da estação: morango, uva e maçã',
      'Chocolate fino — 100 g',
      'Marshmallows',
      'Palitos para assar',
      'Água com gás',
      'Lembrança Cabana das Mansões',
    ],
  },
  {
    id: 'cafe-express',
    name: 'Cesta Café da Manhã Express',
    emotionalCopy:
      'Comece o dia com praticidade, leveza e sabor no seu próprio ritmo.',
    subtitle:
      'Uma opção prática para começar o dia sem precisar preparar tudo.',
    price: 150,
    forGuests: 'Para 2 pessoas',
    items: [
      '1 caixa de bolacha amanteigada importada',
      '1 garrafa de suco de uva integral',
      '2 frutas da estação',
      '2 chipas',
      '8 mini pães de queijo',
      '1 croissant',
      '2 iogurtes gregos',
      '2 cápsulas de café 100% arábica',
    ],
  },
  {
    id: 'boas-vindas',
    name: 'Cesta Boas-Vindas',
    emotionalCopy:
      'Um carinho especial esperando por você no momento exato da sua chegada.',
    subtitle:
      'Mimo acolhedor para inaugurar sua experiência na Cabana das Mansões.',
    price: 100,
    forGuests: 'Para 2 pessoas',
    note: 'Itens oficiais da recepção preparados com o carinho da propriedade.',
  },
  {
    id: 'guloseimas',
    name: 'Cesta de Guloseimas',
    emotionalCopy:
      'Momentos doces para acompanhar suas noites de cinema e descanso sob as estrelas.',
    subtitle:
      'Seleção de delícias para compartilhar a dois ou em família.',
    price: 80,
    forGuests: 'Para 2 pessoas',
    note: 'Seleção especial para tornar sua estadia ainda mais saborosa.',
  },
  {
    id: 'cafe-cabana',
    name: 'Cesta Café da Manhã da Cabana',
    emotionalCopy:
      'Um banquete matinal completo com receitas caseiras e o legítimo afeto do campo.',
    subtitle:
      'Mesa farta e generosa para compartilhar com a família ou amigos.',
    price: 350,
    forGuests: 'Para 4 pessoas',
    categories: [
      {
        categoryTitle: 'Pães e Salgados',
        items: [
          '4 croissants amanteigados',
          '4 enroladinhos de presunto e queijo',
          '4 esfihas de carne',
          '1 pão artesanal de fazenda',
        ],
      },
      {
        categoryTitle: 'Bolo Artesanal',
        items: [
          '1 bolo artesanal fresco (sabores: laranja, fubá, cenoura ou chocolate)',
        ],
      },
      {
        categoryTitle: 'Acompanhamentos Nobres',
        items: [
          'Manteiga de primeira linha',
          'Geleia artesanal',
          'Requeijão cremoso',
          'Mel puro',
          'Doce de leite artesanal',
        ],
      },
      {
        categoryTitle: 'Bebidas',
        items: [
          'Café gourmet especial em grãos',
          'Leite fresco — 1 litro',
          'Suco natural de laranja',
        ],
      },
      {
        categoryTitle: 'Frutas da Estação',
        items: ['Uvas', 'Morangos', 'Mamão', 'Banana', 'Maçã'],
      },
      {
        categoryTitle: 'Frios & Complementos',
        items: ['Granola artesanal', 'Iogurte natural', 'Queijo', 'Presunto'],
      },
    ],
  },
  {
    id: 'cafe-colonial-premium',
    name: 'Cesta Café Colonial Premium',
    emotionalCopy:
      'A mais completa e refinada experiência matinal da Cabana das Mansões.',
    subtitle:
      'Uma celebração gastronômica com itens do café da cabana somados a iguarias nobres.',
    price: null, // NÃO inventar preço (não fornecido no briefing)
    priceFormatted: 'Consultar valor',
    forGuests: 'Para 4 pessoas',
    extraItems: [
      'Todos os itens da Cesta Café da Manhã da Cabana inclusos',
      'Mini pão de queijo quentinho',
      'Queijo Brie',
      'Salame italiano',
      'Mix nobre de castanhas',
      'Biscoitos amanteigados artesanais',
      'Mini waffles OU panquecas',
    ],
  },
];

export interface SpecialPackage {
  id: string;
  name: string;
  period: string;
  nights: number;
  price: number;
  highlightBadge?: string;
  note: string;
}

export interface SeasonalRate {
  id: string;
  name: string;
  period: string;
  ratePerNight?: number;
  note: string;
}

export const SPECIAL_PACKAGES: SpecialPackage[] = [
  {
    id: 'pacote-natal',
    name: 'Pacote Natal',
    period: '24 a 26 de dezembro',
    nights: 2,
    price: 3490,
    highlightBadge: 'Celebração de Fim de Ano',
    note: '2 noites — R$ 3.490 para celebrar a paz do Natal em meio à natureza.',
  },
  {
    id: 'pacote-reveillon',
    name: 'Pacote Réveillon',
    period: '30 de dezembro a 02 de janeiro',
    nights: 3,
    price: 4990,
    highlightBadge: 'Virada de Ano Exclusiva',
    note: '3 noites — R$ 4.990 com spa privativo e céu estrelado do campo.',
  },
];

export const SEASONAL_RATES = {
  dezembroAlta: [
    {
      id: 'dez-18-23',
      period: '18 a 23 de dezembro',
      rate: 1400,
      description: 'Diária sazonal de alta temporada em dezembro.',
    },
    {
      id: 'dez-27-29',
      period: '27 a 29 de dezembro',
      rate: 1400,
      description: 'Diária sazonal no intervalo de fim de ano.',
    },
  ],
  janeiro2027: {
    period: '03 a 31 de janeiro de 2027',
    hoursOfUse: '21 horas de uso por diária',
    cabanas: {
      weekday: 1200, // Segunda a quarta
      weekend: 1400, // Quinta a domingo
    },
    casa: {
      segundaASexta: 1640,
      quintaADomingo: 2000,
      overlapNotice:
        'Nota de sobreposição oficial: Fornecido "Segunda a sexta R$ 1.640" e "Quinta a domingo R$ 2.000". A regra específica para quinta e sexta será confirmada no motor de reservas.',
    },
  },
};

export const CINEMA_GUIDE = {
  title: 'Guia de Uso — Samsung The Freestyle',
  subtitle: 'Cinema das Mansões',
  welcome:
    'Seja bem-vindo ao Cinema das Mansões! Prepare a pipoca, escolha seu filme e aproveite esse momento especial em meio à natureza.',
  sections: [
    {
      id: 'ligar',
      title: '1. Como ligar o projetor',
      steps: [
        'Conecte o cabo de energia do Freestyle à tomada.',
        'Ligue pelo controle remoto ou pelo botão do próprio aparelho.',
        'Aponte para a parede ou tela.',
        'Aguarde o foco automático e a correção da imagem.',
      ],
      tip: 'Quanto mais longe estiver da tela, maior a imagem. Para imagem próxima de 100 polegadas, posicione aproximadamente entre 2,5 e 2,7 metros da tela.',
    },
    {
      id: 'imagem',
      title: '2. Ajustar a imagem',
      path: 'Home → Todas as configurações → Configurações do projetor',
      options: ['Foco', 'Keystone', 'Escala e mover tela', 'Modo de projeção'],
      tip: 'Ambientes mais escuros proporcionam a melhor experiência visual cinematográfica.',
    },
    {
      id: 'wifi',
      title: '3. Conectar ao Wi-Fi',
      path: 'Home → Configurações → Conexão → Rede → Abrir configurações de rede → Escolher Wi-Fi → Inserir senha → Conectar.',
    },
    {
      id: 'netflix',
      title: '4. Assistir Netflix',
      path: 'Home → Apps → Netflix → Acessar a conta disponível → Escolher conteúdo.',
      warning:
        'Por segurança e privacidade, não altere as configurações da conta.',
    },
    {
      id: 'youtube',
      title: '5. Assistir YouTube',
      path: 'Home → Apps → YouTube → Escolher conteúdo.',
      tip: 'Também é possível transmitir vídeos diretamente do seu celular.',
    },
    {
      id: 'smart-view',
      title: '6. Transmitir do celular (Smart View - Samsung)',
      steps: [
        'Certifique-se de que o celular e o Freestyle estão na mesma rede Wi-Fi.',
        'No celular Samsung, abra o Smart View.',
        'Selecione "Samsung The Freestyle".',
        'Confirme a conexão.',
      ],
      warning:
        'Alguns aplicativos de streaming podem bloquear o espelhamento de tela. Nesse caso, utilize o aplicativo diretamente no Freestyle.',
    },
    {
      id: 'transmitir-youtube',
      title: '7. Transmitir YouTube do celular',
      steps: [
        'Abra o aplicativo do YouTube no Freestyle.',
        'Abra o aplicativo do YouTube no seu celular.',
        'Escolha o vídeo desejado.',
        'Toque no ícone de "Transmitir".',
        'Selecione "Samsung The Freestyle".',
      ],
      tip: 'O celular passa a funcionar como controle remoto prático para a reprodução.',
    },
    {
      id: 'som',
      title: '8. Configurar o som (Caixa Bluetooth)',
      path: 'Home → Configurações → Som → Saída de som → Selecionar dispositivo Bluetooth disponível.',
    },
    {
      id: 'dicas',
      title: '9. Dicas para uma experiência especial',
      tips: [
        'Apague as luzes próximas à tela para máxima imersão.',
        'Prepare a pipoca na pipoqueira disponível.',
        'Acomode-se confortavelmente com mantas e almofadas.',
        'Escolha o filme e coloque o celular no silencioso.',
        'Aproveite cada segundo!',
        'Dica mágica: O Freestyle pode ser apontado para o teto para criar uma experiência única enquanto você assiste deitado!',
      ],
    },
    {
      id: 'cuidados',
      title: '10. Cuidados com o equipamento',
      isWarningSection: true,
      rules: [
        'Não mover o projetor durante o funcionamento.',
        'Não cobrir as entradas de ventilação.',
        'Não colocar líquidos próximo ao aparelho.',
        'Não tocar diretamente na lente.',
        'Não desconectar cabos puxando pelo fio.',
        'Desligar sempre pelo controle remoto.',
        'Aguardar o aparelho finalizar o desligamento completo antes de retirar da tomada.',
        'Não alterar configurações avançadas do sistema.',
      ],
      closingMessage:
        'Bom filme! Cinema das Mansões — Descanse. Conecte-se. Viva momentos especiais.',
    },
  ],
};
