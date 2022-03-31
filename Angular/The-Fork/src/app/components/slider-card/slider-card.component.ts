import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() tipo : string = "";

  @Input() datos : any = {
    nombre      : 'Cadiz',
    src         : '#',
    nota        : 10,
    specs       : {
      double  : true,
      pay     : true,
      insider : false,
      offer   : 50,
      yums    : true
    },
    descripcion : "Lorem ipsum",
    reserva     : {
      texto : 'Reserva Ya',
      href  : '#'
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
