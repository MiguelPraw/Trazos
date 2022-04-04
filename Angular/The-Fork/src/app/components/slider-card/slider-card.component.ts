import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  // @Input() tipo : string = "";

  @Input() tipo  : string  = "restaurante";
  
  @Input() props : any     = {
    nombre  : 'Nombre',
    img     : '#',
    tipos   : [ 'Mediterráneo', 'Romántico' ],
    nota    : 9.4,
    specs   : {
      insider : true,
      double  : true,
      pay     : true
    },
    descripcion : 'Lorem',
    precio      : 20,
    offers  : {
      offer   : 50,
      yums    : true
    },
    boton   : {
      href  : '#',
      title : 'Reserva Ya'
    }
  }

  // @Input() datos : any = {
  //   nombre      : 'Cadiz',
  //   src         : '#',
  //   nota        : 10,
  //   specs       : {
  //     double  : true,
  //     pay     : true,
  //     insider : false,
  //     offer   : 50,
  //     yums    : true
  //   },
  //   descripcion : "Lorem ipsum",
  //   reserva     : {
  //     texto : 'Reserva Ya',
  //     href  : '#'
  //   }
  // }

  constructor() { }

  ngOnInit(): void { }

}
