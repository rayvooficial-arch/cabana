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
    id: 'cafe-express',
    name: 'Cesta Café da Manhã Express',
    emotionalCopy:
      'Comece o dia com praticidade, leveza e sabor no seu próprio ritmo.',
    price: 180,
    forGuests: 'Para 2 pessoas',
    items: [
      '1 caixa de bolacha amanteigada importada',
      '1 garrafa de leite',
      '1 garrafa de suco',
      '2 frutas da estação',
      '2 chipas',
      'Mini pães de queijo',
      '1 croissant',
      '2 pães doces',
      '2 iogurtes gregos',
      '2 sachês de cappuccino',
    ],
  },
  {
    id: 'boas-vindas',
    name: 'Cesta Boas-Vindas',
    emotionalCopy:
      'Um carinho especial esperando por você no momento exato da sua chegada.',
    price: 150,
    forGuests: 'Para 2 pessoas',
    items: [
      'Marshmallows',
      'Chocolates',
      'Pipoca doce',
      'Bolinhos',
      'Pão de mel',
      'Fini',
      'Suco',
      'Amendoim',
      'Batata chips',
      'Doritos',
    ],
  },
  {
    id: 'dia-fazendeiro',
    name: 'Dia de Fazendeiro(a)',
    emotionalCopy:
      'Uma experiência divertida para as crianças conhecerem de perto a vida no campo.',
    price: null,
    priceFormatted: 'A partir de R$ 70 por pessoa',
    forGuests: 'Experiência na natureza',
    items: [
      'Visita guiada à fazendinha',
      'Contato com a natureza',
      'Conhecimento sobre os animais',
      'Passeio pelos piquetes e casinha',
      'Alimentação e carinho nos animais',
    ],
  },
  {
    id: 'pescador-profissional',
    name: 'Pescador Profissional',
    emotionalCopy:
      'Para quem quer viver uma verdadeira pescaria no campo.',
    subtitle: 'Produtos alugados para a atividade de pesque e solte.',
    price: null,
    priceFormatted: 'A partir de R$ 100 por pessoa',
    forGuests: 'Experiência na natureza',
    items: [
      'Vara profissional',
      'Iscas especiais para cada tipo de peixe',
      'Ficha de registro de capturas',
    ],
  },
  {
    id: 'cinema-em-familia',
    name: 'Cinema em Família',
    emotionalCopy:
      'Uma noite de filme, aconchego e conexão familiar.',
    price: null,
    priceFormatted: 'A partir de R$ 180 para 2 pessoas · R$ 350 para 4 pessoas',
    forGuests: 'Experiência em família',
    items: [
      'Cinema ao ar livre',
      'Pipoca',
      'Doces',
      'Bebidas',
      'Mantas e almofadas',
    ],
  },
  {
    id: 'piquenique-no-campo',
    name: 'Piquenique no Campo',
    emotionalCopy: 'Um momento delicioso em meio à natureza.',
    price: null,
    priceFormatted: 'A partir de R$ 180 para 2 pessoas · R$ 350 para 4 pessoas',
    forGuests: 'Experiência em família',
    items: [
      'Pães e bolos',
      'Frutas',
      'Frios',
      'Doces',
      'Bebidas',
      'Toalha e montagem',
    ],
  },
  {
    id: 'experiencia-romantica',
    name: 'Experiência Romântica',
    emotionalCopy: 'Montamos uma experiência especialmente para você.',
    subtitle: 'Pedido de casamento, lua de mel, pedido de namoro ou aniversário romântico.',
    price: null,
    priceFormatted: 'A partir de R$ 450',
    forGuests: 'Celebrações a dois',
    isHighlight: true,
    items: [
      'Decoração personalizada',
      'Flores',
      'Velas',
      'Pétalas',
      'Letreiro especial',
      'Organização do ambiente',
      'Aromas',
    ],
    note: 'Itens personalizados e fotografia podem ser contratados à parte.',
  },
  {
    id: 'pacote-escola',
    name: 'Pacote Escola – Aprender em Meio à Natureza',
    emotionalCopy:
      'Uma experiência educativa que une lazer, contato com a natureza e aprendizado.',
    subtitle: 'Ideal para Educação Infantil, Ensino Fundamental e projetos pedagógicos.',
    price: null,
    priceFormatted: 'Consulte valores e condições',
    forGuests: 'Grupos escolares',
    ctaText: 'CONSULTAR CONDIÇÕES',
    items: [
      'Visita guiada pela propriedade',
      'Interação com os animais da fazendinha',
      'Experiência de coleta de ovos das galinhas poedeiras',
      'Conhecendo a horta e o pomar',
      'Atividade de pesque e solte',
      'Espaço para lanche ou piquenique',
      'Cenários para fotos da turma',
    ],
    note:
      'Invista em uma experiência educativa inesquecível. Para consultar valores, disponibilidade e condições especiais para grupos escolares, entre em contato com nossa equipe. Teremos prazer em preparar uma experiência especial para sua escola!',
  },
];

export interface SpecialPackage {
  id: string;
  name: string;
  period: string;
  minimumNights: number;
  rates: {
    cabanas: {
      express: number;
      conforto: number;
    };
    casa: {
      express: number;
      conforto: number;
    };
  };
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
    name: 'Natal',
    period: '24 a 26 de dezembro',
    minimumNights: 2,
    rates: {
      cabanas: { express: 1490, conforto: 1610 },
      casa: { express: 2290, conforto: 2470 },
    },
    highlightBadge: 'Celebração de Fim de Ano',
    note: 'Mínimo de 2 diárias. Valores por diária.',
  },
  {
    id: 'pacote-reveillon',
    name: 'Réveillon',
    period: '30 de dezembro a 02 de janeiro',
    minimumNights: 3,
    rates: {
      cabanas: { express: 1790, conforto: 1910 },
      casa: { express: 2690, conforto: 2870 },
    },
    highlightBadge: 'Virada de Ano Exclusiva',
    note: 'Mínimo de 3 diárias. Valores por diária.',
  },
];

export const SEASONAL_RATES = {
  period: 'Dezembro de 2026 e janeiro de 2027',
  schedule: 'Tarifa única — segunda a domingo',
  rates: {
    express: {
      cabanas: 1290,
      casa: 1990,
    },
    conforto: {
      cabanas: 1410,
      casa: 2170,
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

