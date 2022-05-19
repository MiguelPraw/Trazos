import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-peliculas',
  templateUrl: './slider-peliculas.component.html',
  styleUrls: ['./slider-peliculas.component.scss']
})
export class SliderPeliculasComponent implements OnInit {

  @HostListener('window:resize',['$event'])
  redimensionar( e : any ) : void {
    if( window.innerWidth < 1200 ) {
      this.elementosVisibles = 2;
    } else {
      this.elementosVisibles = 4;
    }
    this.numColumnas = this.slider.items.length / this.elementosVisibles;
    this.limite = (this.slider.items.length / this.numFilas) / this.elementosVisibles;
  }
  
  elementosVisibles : number = 4;
  numFilas          : number = 2;
  numColumnas       : number = 0;
  limite            : number = 0;

  numero            : number = 0;

  // 16 / 2 = 8 -> columnas
  // 8 / 4 = 2
  
  @Input() slider : any = {}

  constructor() { }

  ngOnInit(): void { 
    if( window.innerWidth < 1200 ) {
      this.elementosVisibles = 2;
    } else {
      this.elementosVisibles = 4;
    }
    this.numColumnas = this.slider.items.length / this.elementosVisibles;
    this.limite = (this.slider.items.length / this.numFilas) / this.elementosVisibles;
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
    let ancho = `repeat(${this.slider.items.length / this.numFilas},1fr)` ;
    // console.log( window.innerWidth)
    // console.log( ancho );
    return ancho;
  }

  translateX() : string {
    return `translateX(-${this.numero * (100 / ((this.slider.items.length / this.numFilas) / this.elementosVisibles))}%)`;
  }

}
