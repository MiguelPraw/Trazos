import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cabecera',
  templateUrl: './slider-cabecera.component.html',
  styleUrls: ['./slider-cabecera.component.scss']
})
export class SliderCabeceraComponent implements OnInit {

  numero : number = 0;

  @Input() slider : any[] = [];

  constructor() { }

  ngOnInit(): void { 
    console.log(this.slider);
  }

  aumentar() {
    this.numero++;
  }

  disminuir() {
    this.numero--;
  }

  translateX() : string {
    return `translateX(-${this.numero * (100 / this.slider.length)}%)`;
  }

  ancho() : string {
    return `${this.slider.length * 100}%`;
  }

  grid() : string {
    return `repeat(${this.slider.length},1fr)`;
  }

}
