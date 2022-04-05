import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cabecera-card',
  templateUrl: './slider-cabecera-card.component.html',
  styleUrls: ['./slider-cabecera-card.component.scss']
})
export class SliderCabeceraCardComponent implements OnInit {

  @Input() slide : any = {
    inicial   : true,
    img       : "https://static.filmin.es/images/wildcard/1077/9/highlighted_0_3_1280x605.webp",
    titulo    : "El mayor catálogo de cine y series",
    subtitulo : "Suscríbete por 7,99 €",
    serie     : false,
    boton     : {
      texto : "Más información",
      href : "#"
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
