import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-categorias',
  templateUrl: './slider-categorias.component.html',
  styleUrls: ['./slider-categorias.component.scss']
})
export class SliderCategoriasComponent implements OnInit {

  @Input() slider : any[] = [];

  elementosVisibles : number = 4;

  numero  : number = 0;
  limite  : number = 0;
  over    : boolean = false;

  constructor() { }

  ngOnInit(): void { 
    this.limite = this.slider.length / this.elementosVisibles;
  }

  setOver( valor : boolean ) : void {
    this.over = valor;
  }

  aumentar() : void {
    this.numero++;
  }

  disminuir() : void {
    this.numero--;
  }

  ancho() : string {
    return `${100 * this.limite}%`;
  }

  grid() : string {
    return `repeat(${this.slider.length},1fr)`;
  }

  translateX() : string {
    return `translateX(-${this.numero * (100 / this.limite)}%)`;
  }

}
