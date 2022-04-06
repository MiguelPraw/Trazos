import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-peliculas-card',
  templateUrl: './slider-peliculas-card.component.html',
  styleUrls: ['./slider-peliculas-card.component.scss']
})
export class SliderPeliculasCardComponent implements OnInit {

  @Input() slide : any = {}

  over : boolean = false;

  constructor() { }

  ngOnInit(): void { }

  setOver( valor : boolean ) : void {
    this.over = valor;
  }

}
