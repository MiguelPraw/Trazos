import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cabecera-card',
  templateUrl: './slider-cabecera-card.component.html',
  styleUrls: ['./slider-cabecera-card.component.scss']
})
export class SliderCabeceraCardComponent implements OnInit {

  @Input() slide : any = {}

  constructor() { }

  ngOnInit(): void { }

}
