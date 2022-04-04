import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cabecera',
  templateUrl: './slider-cabecera.component.html',
  styleUrls: ['./slider-cabecera.component.scss']
})
export class SliderCabeceraComponent implements OnInit {

  numero : number = 0;

  slides : any[] = [
    {},
    {},
  ];


  constructor() { }

  ngOnInit(): void { }

  aumentar() {
    this.numero++;
  }

  disminuir() {
    this.numero--;
  }

  translateX() : string {
    return `translateX(-${this.numero * 50}%)`;
  }

  ancho() : string {
    return `${this.slides.length * 100}%`;
  }

  grid() : string {
    return `repeat(${this.slides.length},1fr)`;
  }

}
