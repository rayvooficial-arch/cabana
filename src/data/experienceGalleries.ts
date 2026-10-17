export interface ExperienceGalleryPhoto {
  title: string;
  caption: string;
  src: string;
  position?: string;
  size?: string;
}

export interface ExperienceGallery {
  id: string;
  title: string;
  shortDescription: string;
  iconName: 'Bath' | 'Film' | 'Waves' | 'Flame' | 'Baby' | 'Heart' | 'Utensils' | 'Trees';
  photos: ExperienceGalleryPhoto[];
  mediaAspect?: string;
  coverSrc?: string;
  coverPosition?: string;
  coverSize?: string;
}

export const DEFAULT_EXPERIENCE_GALLERIES: ExperienceGallery[] = [
  {
    id: 'fazendinha', title: 'Fazendinha', shortDescription: 'Mini animais e contato com a natureza', iconName: 'Heart', mediaAspect: 'aspect-square', coverSrc: '/fazendinha-vacas.webp',
    photos: [
      { title: 'As vaquinhas da fazendinha', caption: 'Duas companheiras dóceis em meio ao verde', src: '/fazendinha-vacas.webp' },
      { title: 'Mini porquinhos', caption: 'A dupla curiosa aproveitando o espaço da fazendinha', src: '/fazendinha-mini-porcos.webp' },
      { title: 'Mini cabras', caption: 'Companheiras brincalhonas no abrigo de madeira', src: '/fazendinha-mini-cabras.webp' },
      { title: 'Mini cavalo', caption: 'O charme da vida no campo bem de perto', src: '/fazendinha-mini-cavalo.webp' },
      { title: 'Patos no lago', caption: 'A dupla aproveitando um passeio tranquilo pela água', src: '/fazendinha-patos-lago.webp' },
      { title: 'Coelhinhos', caption: 'Uma dupla tranquila em meio ao verde', src: '/fazendinha-coelhos.webp' },
      { title: 'Galinhas-d’angola', caption: 'Beleza e tradição do campo no galinheiro', src: '/fazendinha-galinhas-angola.webp' },
      { title: 'Galinhas da fazendinha', caption: 'As moradoras curiosas do galinheiro bem de perto', src: '/fazendinha-galinhas-livres.webp' },
      { title: 'Porquinho-da-índia de pelo longo', caption: 'Um morador muito charmoso da fazendinha', src: '/fazendinha-porquinho-india-pelo-longo.webp' },
    ],
  },
  {
    id: 'cinema-ao-ar-livre', title: 'Cinema ao ar livre', shortDescription: 'Telão em meio à natureza', iconName: 'Film', mediaAspect: 'aspect-square', coverSrc: '/experiences/cinema/01-cinema-externo.jpg',
    photos: [
      { title: 'Cinema ao ar livre em meio à natureza', caption: 'Estrutura preparada para sessões especiais ao ar livre', src: '/experiences/cinema/01-cinema-externo.jpg' },
      { title: 'Ambiente do cinema', caption: 'Espaço aconchegante para curtir filmes em boa companhia', src: '/experiences/cinema/02-cinema-ambiente.jpg' },
      { title: 'Cinema iluminado à noite', caption: 'Iluminação acolhedora para aproveitar a sessão noturna', src: '/experiences/cinema/03-cinema-noturno.jpg' },
      { title: 'Vista completa do cinema', caption: 'Telão e deck integrados à área verde da propriedade', src: '/experiences/cinema/04-cinema-deck.png', size: 'cover', position: 'center 58%' },
    ],
  },
  {
    id: 'pesque-e-solte', title: 'Pesque e solte', shortDescription: 'Pesca recreativa no lago', iconName: 'Waves', mediaAspect: 'aspect-square', coverSrc: '/experiences/pesca/01-deck-lago.png',
    photos: [
      { title: 'Deck de pesca junto ao lago', caption: 'Espaço coberto para relaxar e aproveitar o lago', src: '/experiences/pesca/01-deck-lago.png' },
      { title: 'Deck sobre o tanque', caption: 'Vista ampla da estrutura de pesca e da área verde', src: '/experiences/pesca/02-deck-tanque.jpg' },
      { title: 'Pesca no lago', caption: 'Pescaria em meio à natureza', src: '/experiences/pesca/03-pesca.jpg' },
      { title: 'Espécies do lago', caption: 'Placa com informações sobre os peixes do pesqueiro', src: '/experiences/pesca/04-placa-peixes.png', size: 'cover', position: 'center 56%' },
      { title: 'Área de churrasqueira junto ao lago', caption: 'Estrutura de apoio para aproveitar o dia na área externa', src: '/experiences/pesca/05-area-churrasqueira.jpg' },
    ],
  },
  {
    id: 'fogueira-e-descanso', title: 'Fogueira e descanso', shortDescription: 'Fogo, balanços e área verde', iconName: 'Flame', mediaAspect: 'aspect-square', coverSrc: '/experiences/fogueira/01-fogareiro-cinematic.jpg',
    photos: [
      { title: 'Fogareiro ao ar livre', caption: 'Um espaço acolhedor para aproveitar as noites na propriedade', src: '/experiences/fogueira/01-fogareiro-cinematic.jpg' },
      { title: 'Fogueira vista de cima', caption: 'Área de fogo cercada por assentos de madeira', src: '/experiences/fogueira/02-fogueira-vista-superior.png' },
      { title: 'Vinho junto à fogueira', caption: 'Clima especial para relaxar diante das cabanas iluminadas', src: '/experiences/fogueira/03-fogueira-vinho.png', size: 'cover', position: 'center 58%' },
    ],
  },
  {
    id: 'playground-campinho-redario', title: 'Playground, campinho e redário', shortDescription: 'Diversão e descanso ao ar livre', iconName: 'Baby', mediaAspect: 'aspect-square', coverSrc: '/experiences/playground/01-playground-vista-geral.jpg',
    photos: [
      { title: 'Playground ao ar livre', caption: 'Espaço preparado para as crianças brincarem em meio à natureza', src: '/experiences/playground/01-playground-vista-geral.jpg' },
      { title: 'Brinquedos do playground', caption: 'Diversão com estrutura de madeira e área verde', src: '/experiences/playground/02-playground.jpg' },
      { title: 'Campinho', caption: 'Área aberta para jogos e brincadeiras', src: '/experiences/playground/03-campinho.jpg' },
      { title: 'Balanços', caption: 'Balanços cercados pela natureza da propriedade', src: '/experiences/playground/04-balancos.jpg' },
      { title: 'Redário', caption: 'Redes à sombra para descansar e desacelerar', src: '/experiences/playground/05-redario.png' },
      { title: 'Mesa de piquenique e descanso', caption: 'Área sombreada para reunir a família e relaxar', src: '/experiences/playground/06-mesa-piquenique.png' },
    ],
  },
  {
    id: 'hidromassagens', title: 'Hidromassagens', shortDescription: 'Privativas nas acomodações', iconName: 'Bath', mediaAspect: 'aspect-square', coverSrc: '/hidromassagens/01-hidro-externa-dia.webp',
    photos: [
      { title: 'Hidromassagem externa durante o dia', caption: 'Relaxamento ao ar livre junto ao deck da cabana', src: '/hidromassagens/01-hidro-externa-dia.webp' },
      { title: 'Hidromassagem externa à noite', caption: 'Iluminação acolhedora para aproveitar a noite', src: '/hidromassagens/02-hidro-externa-noite.webp' },
      { title: 'Hidromassagem interna com velas', caption: 'Ambiente intimista preparado para relaxar', src: '/hidromassagens/03-hidro-interna-noite.webp' },
      { title: 'Hidromassagem interna', caption: 'Banheira integrada ao interior da cabana', src: '/hidromassagens/04-hidro-interna-dia.webp' },
    ],
  },
  {
    id: 'churrasqueiras', title: 'Churrasqueiras', shortDescription: 'Estruturas para preparar refeições ao ar livre', iconName: 'Utensils', mediaAspect: 'aspect-square', coverSrc: 'https://gkylxuplxvauxejxeorn.supabase.co/storage/v1/object/public/site-media/experiencias/churrasqueiras/whatsapp-image-2026-10-17-at-16-02-466-1792269162208.jpeg',
    photos: [
      { title: 'Churrasqueira no deck', caption: 'Estrutura completa e coberta para preparar refeições ao ar livre', src: 'https://gkylxuplxvauxejxeorn.supabase.co/storage/v1/object/public/site-media/experiencias/churrasqueiras/whatsapp-image-2026-10-17-at-16-02-466-1792269162208.jpeg' },
      { title: 'Churrasqueira portátil', caption: 'Opção prática junto à área verde e à fazendinha', src: 'https://gkylxuplxvauxejxeorn.supabase.co/storage/v1/object/public/site-media/experiencias/churrasqueiras/02-churrasqueira-portatil-1792269361053.jpg' },
      { title: 'Churrasqueira grande', caption: 'Amplo espaço para o preparo das refeições durante a estadia', src: 'https://gkylxuplxvauxejxeorn.supabase.co/storage/v1/object/public/site-media/experiencias/churrasqueiras/03-churrasqueira-grande-1792269423100.jpg' },
    ],
  },
  {
    id: 'areas-verdes', title: 'Áreas verdes', shortDescription: 'Jardins, caminhos e espaços de descanso', iconName: 'Trees', mediaAspect: 'aspect-square', coverSrc: 'https://gkylxuplxvauxejxeorn.supabase.co/storage/v1/object/public/site-media/experiencias/areas-verdes/01-fogareiro-jardim-1792269444494.jpg',
    photos: [
      { title: 'Área verde com fogareiro', caption: 'Jardim arborizado com caminhos e espaço para aproveitar o fogareiro', src: 'https://gkylxuplxvauxejxeorn.supabase.co/storage/v1/object/public/site-media/experiencias/areas-verdes/01-fogareiro-jardim-1792269444494.jpg' },
    ],
  },
];

