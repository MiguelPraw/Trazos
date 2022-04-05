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
          src       : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
          titulo    : "El gran Lebowski",
          director  : "Joel Coen",
          nota      : 8.7,
          suscriptiores : true,
          alquiler : false,
          anio : 1998,
          duracion : "1h 57min",
          descripcion : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
        },
        {
          src       : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
          titulo    : "El gran Lebowski",
          director  : "Joel Coen",
          nota      : 8.7,
          suscriptiores : true,
          alquiler : false,
          anio : 1998,
          duracion : "1h 57min",
          descripcion : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
        },
        {
          src       : "https://static.filmin.es/images/media/39491/1/card_0_3_550x310.png",
          titulo    : "El gran Lebowski",
          director  : "Joel Coen",
          nota      : 8.7,
          suscriptiores : true,
          alquiler : false,
          anio : 1998,
          duracion : "1h 57min",
          descripcion : "Los hermanos Coen entretejen una oda ambivalente a la ciudad de Los Ángeles protagonizada por el antihéroe de los 90 por antonomasia, 'El Nota' en este mito incontestable de la cultura pop.",
        }
      ]
  }

  constructor() { }

  ngOnInit(): void { }

}
