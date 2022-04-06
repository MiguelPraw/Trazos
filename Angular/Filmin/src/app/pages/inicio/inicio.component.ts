import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

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

  sliderGeneral : any = {
      titulo : "Nuevos Estrenos de Universal",
      subtitulo : "Aquí los clásicos se ven de otra forma",
      items : [ 
        {
          src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
          titulo        : "El gran Lebowski",
          director      : "Joel Coen",
          nota          : 8.7,
          serie         : false,
          suscriptores  : true,
          alquiler      : false,
          anio          : 1998,
          duracion      : "1h 57min",
          descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
        },
        {
          src           : "https://static.filmin.es/images/media/39953/3/card_0_3_550x310.webp",
          titulo        : "La lista de Schindler",
          director      : "Steven Spielberg",
          nota          : 9.1,
          serie         : true,
          suscriptores  : false,
          alquiler      : true,
          anio          : 1993,
          duracion      : "3h 16min",
          descripcion   : "Steven Spielberg se consagró en el olimpo del séptimo arte con esta desgarradora historia real del holocausto en la que un empresario alemán salvó miles de vidas judías.",
        },
        {
          src           : "https://static.filmin.es/images/media/39680/1/card_0_3_550x310.png",
          titulo        : "La milla verde",
          director      : "Frank Darabont",
          nota          : 8.1,
          serie         : true,
          suscriptores  : true,
          alquiler      : false,
          anio          : 1999,
          duracion      : "3h",
          descripcion   : "Esta adaptación de Stephen King robó los corazones del gran público a finales de los 90 gracias a la impagable química entre Tom Hanks y el descubrimiento de ese año, Michael Clarke Duncan.",
        },
        {
          src           : "https://static.filmin.es/images/media/39947/1/card_0_3_550x310.png",
          titulo        : "El hombre que nunca estuvo allí",
          director      : "Joel Coen",
          nota          : 8.4,
          serie         : true,
          suscriptores  : true,
          alquiler      : false,
          anio          : 2001,
          duracion      : "1h 56min",
          descripcion   : "Obra 'noir' tan singular en su forma como rica en su significado que ejemplifica por qué los hermanos Coen componen uno de los duetos más interesantes de la historia del cine.",
        },
        {
          src           : "https://static.filmin.es/images/media/39820/2/card_0_3_550x310.png",
          titulo        : "Sneakers (Los fisgones)",
          director      : "Phil Alden Robinson",
          nota          : 7.3,
          serie         : true,
          suscriptores  : true,
          alquiler      : false,
          anio          : 1992,
          duracion      : "2h 10min",
          descripcion   : "Con un reparto de ensueño en el que sobresalen Robert Redford, esta fantasía tecnológica mostró al mundo las flaquezas de los sistemas de defensa en pleno siglo de la información.",
        },
        {
          src           : "https://static.filmin.es/images/media/39949/1/card_0_3_550x310.png",
          titulo        : "Notting Hill",
          director      : "Roger Michell",
          nota          : 7.8,
          serie         : true,
          suscriptores  : true,
          alquiler      : false,
          anio          : 1999,
          duracion      : "2h 7min",
          descripcion   : "Una de las comedias románticas más conocidas y veneradas de todos los tiempos que inmortalizó a Hugh Grant y a Julia Roberts.",
        },
        {
          src           : "https://static.filmin.es/images/media/39377/1/card_0_3_550x310.png",
          titulo        : "El presidente y Miss Wade",
          director      : "Rob Reiner",
          nota          : 7.4,
          serie         : true,
          suscriptores  : true,
          alquiler      : false,
          anio          : 1995,
          duracion      : "1h 54min",
          descripcion   : "Vista como un anticipo de 'El ala oeste de la Casa Blanca' en el que Michael Douglas, Annette Bening, Martin Sheen y Michael J. Fox dan vida a otro guion magistral de Aaron Sorkin.",
        },
        {
          src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
          titulo        : "El gran Lebowski",
          director      : "Joel Coen",
          nota          : 8.7,
          serie         : true,
          suscriptores  : true,
          alquiler      : false,
          anio          : 1998,
          duracion      : "1h 57min",
          descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
        }
      ]
  }

  constructor() { }

  ngOnInit(): void { }

}


/* 
sliderGeneral : any = {
  titulo : "Nuevos Estrenos de Universal",
  subtitulo : "Aquí los clásicos se ven de otra forma",
  items : [ 
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : false,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39953/3/card_0_3_550x310.webp",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : false,
      alquiler      : true,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    },
    {
      src           : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
      titulo        : "El gran Lebowski",
      director      : "Joel Coen",
      nota          : 8.7,
      serie         : true,
      suscriptores  : true,
      alquiler      : false,
      anio          : 1998,
      duracion      : "1h 57min",
      descripcion   : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
    }
  ]
} */