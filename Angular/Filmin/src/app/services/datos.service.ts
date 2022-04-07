import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  sliderCabecera : any[] = [
    {
      inicial   : true,
      img       : "https://static.filmin.es/images/wildcard/1077/9/highlighted_0_3_1280x605.webp",
      titulo    : "El mayor catálogo de cine y series",
      subtitulo : "Suscríbete por 7,99 €",
      serie     : false,
      boton     : {
        texto : "Más información",
        href : "#"
      }
    },
    {
      img       : "https://static.filmin.es/images/wildcard/1077/9/highlighted_0_3_1280x605.webp",
      titulo    : "The Beach Bum",
      subtitulo : "Harmony Korine",
      serie     : true,
      boton     : {
        texto : "Más información",
        href : "#"
      }
    },
    {
      img       : "https://static.filmin.es/images/wildcard/1077/9/highlighted_0_3_1280x605.webp",
      titulo    : "The Beach Bum",
      subtitulo : "Harmony Korine",
      serie     : true,
      boton     : {
        texto : "Más información",
        href : "#"
      }
    },
  ];

  sliderCategorias : any[] = [
    {
      src : "https://static.filmin.es/images/wildcard/1358/8/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1011/1/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1648/1/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1507/3/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1358/8/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1011/1/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1648/1/card_0_3_550x311.webp"
    },
    {
      src : "https://static.filmin.es/images/wildcard/1507/3/card_0_3_550x311.webp"
    },
  ];

  peliculas : any[] = [
    {
      url           : "el-gran-lebowski",
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      genero        : "Comedia",
      edad          : "12+",
      hd            : true,
      nota          : "8,7",
      serie         : false,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      url           : "la-milla-verde",
      src           : "https://static.filmin.es/images/media/39680/1/card_0_3_550x310.png",
      titulo        : "La milla verde",
      director      : "Frank Darabont",
      genero        : "Drama",
      edad          : "13+",
      hd            : true,
      nota          : "8,1",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1999,
      duracion      : "3h",
      descripcion   : "Esta adaptación de Stephen King robó los corazones del gran público a finales de los 90 gracias a la impagable química entre Tom Hanks y el descubrimiento de ese año, Michael Clarke Duncan.",
    },
    {
      url           : "el-hombre-que-nunca-estuvo-alli",
      src           : "https://static.filmin.es/images/media/39947/1/card_0_3_550x310.png",
      titulo        : "El hombre que nunca estuvo allí",
      director      : "Joel Coen",
      nota          : "8,4",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 2001,
      duracion      : "1h 56min",
      descripcion   : "Obra 'noir' tan singular en su forma como rica en su significado que ejemplifica por qué los hermanos Coen componen uno de los duetos más interesantes de la historia del cine.",
    },
    {
      url           : "sneakers",
      src           : "https://static.filmin.es/images/media/39820/2/card_0_3_550x310.png",
      titulo        : "Sneakers (Los fisgones)",
      director      : "Phil Alden Robinson",
      nota          : "7,3",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1992,
      duracion      : "2h 10min",
      descripcion   : "Con un reparto de ensueño en el que sobresalen Robert Redford, esta fantasía tecnológica mostró al mundo las flaquezas de los sistemas de defensa en pleno siglo de la información.",
    },
    {
      url           : "el-gran-lebowski",
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : "8,7",
      serie         : false,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      url           : "la-milla-verde",
      src           : "https://static.filmin.es/images/media/39680/1/card_0_3_550x310.png",
      titulo        : "La milla verde",
      director      : "Frank Darabont",
      nota          : "8,1",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1999,
      duracion      : "3h",
      descripcion   : "Esta adaptación de Stephen King robó los corazones del gran público a finales de los 90 gracias a la impagable química entre Tom Hanks y el descubrimiento de ese año, Michael Clarke Duncan.",
    },
    {
      url           : "el-hombre-que-nunca-estuvo-alli",
      src           : "https://static.filmin.es/images/media/39947/1/card_0_3_550x310.png",
      titulo        : "El hombre que nunca estuvo allí",
      director      : "Joel Coen",
      nota          : "8,4",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 2001,
      duracion      : "1h 56min",
      descripcion   : "Obra 'noir' tan singular en su forma como rica en su significado que ejemplifica por qué los hermanos Coen componen uno de los duetos más interesantes de la historia del cine.",
    },
    {
      url           : "sneakers",
      src           : "https://static.filmin.es/images/media/39820/2/card_0_3_550x310.png",
      titulo        : "Sneakers (Los fisgones)",
      director      : "Phil Alden Robinson",
      nota          : "7,3",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1992,
      duracion      : "2h 10min",
      descripcion   : "Con un reparto de ensueño en el que sobresalen Robert Redford, esta fantasía tecnológica mostró al mundo las flaquezas de los sistemas de defensa en pleno siglo de la información.",
    },
    {
      url           : "la-lista-de-schindler",
      src           : "https://static.filmin.es/images/media/39953/3/card_0_3_550x310.webp",
      titulo        : "La lista de Schindler",
      director      : "Steven Spielberg",
      nota          : "9,1",
      serie         : true,
      suscriptores  : false,
      alquiler      : true,
      anio          : 1993,
      duracion      : "3h 16min",
      descripcion   : "Steven Spielberg se consagró en el olimpo del séptimo arte con esta desgarradora historia real del holocausto en la que un empresario alemán salvó miles de vidas judías.",
    },
    {
      url           : "notting-hill",
      src           : "https://static.filmin.es/images/media/39949/1/card_0_3_550x310.png",
      titulo        : "Notting Hill",
      director      : "Roger Michell",
      nota          : "7,8",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1999,
      duracion      : "2h 7min",
      descripcion   : "Una de las comedias románticas más conocidas y veneradas de todos los tiempos que inmortalizó a Hugh Grant y a Julia Roberts.",
    },
    {
      url           : "el-presidente-y-miss-wade",
      src           : "https://static.filmin.es/images/media/39377/1/card_0_3_550x310.png",
      titulo        : "El presidente y Miss Wade",
      director      : "Rob Reiner",
      nota          : "7,4",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1995,
      duracion      : "1h 54min",
      descripcion   : "Vista como un anticipo de 'El ala oeste de la Casa Blanca' en el que Michael Douglas, Annette Bening, Martin Sheen y Michael J. Fox dan vida a otro guion magistral de Aaron Sorkin.",
    },
    {
      url           : "regreso-al-futuro",
      src           : "https://static.filmin.es/images/media/39404/1/card_0_3_550x310.png",
      titulo        : "Regreso al futuro",
      director      : "Robert Zemeckis",
      nota          : "9,1",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1985,
      duracion      : "1h 56min",
      descripcion   : "'Si vas a hacer algo, hazlo con estilo'. El Delorean, los años 50 y la inmortal figura de Michael J. Fox, quién puede olvidar la quintaesencia de la era dorada del blockbuster ochentero?",
    },
    {
      url           : "la-lista-de-schindler",
      src           : "https://static.filmin.es/images/media/39953/3/card_0_3_550x310.webp",
      titulo        : "La lista de Schindler",
      director      : "Steven Spielberg",
      nota          : "9,1",
      serie         : true,
      suscriptores  : false,
      alquiler      : true,
      anio          : 1993,
      duracion      : "3h 16min",
      descripcion   : "Steven Spielberg se consagró en el olimpo del séptimo arte con esta desgarradora historia real del holocausto en la que un empresario alemán salvó miles de vidas judías.",
    },
    {
      url           : "notting-hill",
      src           : "https://static.filmin.es/images/media/39949/1/card_0_3_550x310.png",
      titulo        : "Notting Hill",
      director      : "Roger Michell",
      nota          : "7,8",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1999,
      duracion      : "2h 7min",
      descripcion   : "Una de las comedias románticas más conocidas y veneradas de todos los tiempos que inmortalizó a Hugh Grant y a Julia Roberts.",
    },
    {
      url           : "el-presidente-y-miss-wade",
      src           : "https://static.filmin.es/images/media/39377/1/card_0_3_550x310.png",
      titulo        : "El presidente y Miss Wade",
      director      : "Rob Reiner",
      nota          : "7,4",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1995,
      duracion      : "1h 54min",
      descripcion   : "Vista como un anticipo de 'El ala oeste de la Casa Blanca' en el que Michael Douglas, Annette Bening, Martin Sheen y Michael J. Fox dan vida a otro guion magistral de Aaron Sorkin.",
    },
    {
      url           : "regreso-al-futuro",
      src           : "https://static.filmin.es/images/media/39404/1/card_0_3_550x310.png",
      titulo        : "Regreso al futuro",
      director      : "Robert Zemeckis",
      nota          : "9,1",
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1985,
      duracion      : "1h 56min",
      descripcion   : "'Si vas a hacer algo, hazlo con estilo'. El Delorean, los años 50 y la inmortal figura de Michael J. Fox, quién puede olvidar la quintaesencia de la era dorada del blockbuster ochentero?",
    }
  ]

  slidersInicio : any[] = [
    {
      titulo : "Nuevos Estrenos de Universal",
      subtitulo : "Aquí los clásicos se ven de otra forma",
      items : this.peliculas,
    },
    {
      titulo : "Las más vistas",
      subtitulo : "De la última semana",
      items : this.peliculas,
    },
    {
      titulo : "Grandes estrenos exclusivos",
      subtitulo : "Solo los verás en Filmin",
      items : this.peliculas,
    },
  ]

  constructor() { }
}
