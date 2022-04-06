import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-peliculas',
  templateUrl: './slider-peliculas.component.html',
  styleUrls: ['./slider-peliculas.component.scss']
})
export class SliderPeliculasComponent implements OnInit {

  elementosVisibles : number = 4;
  numFilas          : number = 2;
  numColumnas       : number = 0;

  numero            : number = 0;
  
  @Input() slider : any = {}

  constructor() { }

  ngOnInit(): void { 
    this.numColumnas = this.slider.items.length / this.elementosVisibles;
  }

  aumentar() : void {
    this.numero++;
  }

  disminuir() : void {
    this.numero--;
  }

  ancho() : string {
    return `${(this.numColumnas / this.numFilas) * 100}%`;
  }

  gridColumns() : string {
    return `repeat(${this.slider.items.length / this.numFilas},1fr)`;
  }

  translateX() : string {
    return `translateX(-${this.numero * (100 / this.numColumnas)}%)`;
  }

}
