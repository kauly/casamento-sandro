const roteiros = [
  {
    title: "Vaticano",
    text:
      "Bilhete de entrada do museu do Vaticano. Conhecer a história do mundo.",
    price: "245.00"
  },
  {
    title: "Pisa",
    text:
      "Depois de algumas horas de museu, nada como uma pizza italiana e um vinho da casa.",
    price: "185.00"
  },
  {
    title: "Roma",
    text:
      "Dinheiro no bolso para explorar os lugares interessantíssimos e que guardam tesouros inestimáveis de Roma.",
    price: "95.00"
  },
  {
    title: "Roma",
    text:
      "Dizem que a Fontana  di Trevi de madrugada é iluminada e linda. Ideal para uns bons vinhos até ao amanhacer...",
    price: "215.00"
  },
  {
    title: "Roma",
    text:
      "Conhecer o Panteão e tudo a sua volta. O resto do dia vamos experimentar o melhor da gastronomia romana nos restaurantes que ficam ao ar livre.",
    price: "255.00"
  },
  {
    title: "Siena",
    text:
      "Bilhete de entrada da Torre del Mangia + Palazzo Pubblico + Santa Maria della Scala. Sim! Nós queremos subir os 505 degraus da Torre del Mangia!",
    price: "205.00"
  },
  {
    title: "Pisa",
    text: "Bilhete de entrada da Torre. São 296 degraus!!",
    price: "125.00"
  },
  {
    title: "Veneza",
    text: "Um lugar, um amor, um final de tarde e um vinho.",
    price: "145.00"
  },
  {
    title: "Veneza",
    text:
      "Parar nos diversos bares de Dorsoduro.Um bairro muito famoso e movimentado da cidade de Veneza.",
    price: "295.00"
  },
  {
    title: "Veneza",
    text: "O passeio de Gôndola por Veneza o mais romântico e tradicional.",
    price: "545.00"
  },
  {
    title: "Verona",
    text:
      "Bilhete de entrada da Arena de Verona. Igrejas, templos e palácios fazem parte dessa grande descoberta.",
    price: "165.00"
  },
  {
    title: "Verona",
    text:
      "Em Verona foi escrita a história de amor de Romeu e Julieta, e porque não um jantar sofisticado e um champagne?",
    price: "325.00"
  },
  {
    title: "Verona",
    text:
      "Comprar, comprar e comprar na ferinha ao redor da fonte da famosa Madona di Verona.",
    price: "75.00"
  },
  {
    title: "Roma",
    text: "Entrada do grandioso Coliseu.",
    price: "125.00"
  },
  {
    title: "Florença",
    text:
      "Por Florença vamos estar carro conhecendo as estradas que são lindas e as vinícolas mais próximas.",
    price: "85.00"
  },
  {
    title: "Milão",
    text:
      "Viajar para Milão é colecionar memórias. Entrada na Catedral de Milão e na saída um tradicional sorvete italiano.",
    price: "165.00"
  }
];

export interface IRoteiros {
  title: string;
  text: string;
  price?: string;
  img?: any;
}

export default roteiros;
