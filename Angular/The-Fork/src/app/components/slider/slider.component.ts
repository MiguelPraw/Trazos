import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  numero            : number = 0;
  elementosVisibles : number = 4;

  slides : any[] = [
    { },
    { },
    { },
    { },
    { },
    { },
    { },
    { }
  ];

  limite : number = this.slides.length / this.elementosVisibles;

  constructor() { }

  ngOnInit(): void { }

  aumentarNumero() : void {
    if ( this.numero < this.limite - 1 ) {
      this.numero++;
    }
  }

  disminuirNumero() : void {
    if ( this.numero > 0 ) {
      this.numero--;
    }
  }

  ancho() : string {
    return `${ 100 * this.limite }%`;
  }

  translateX() : string {
    return `translateX(${ (-100 / this.limite) * this.numero }%)`;
  }

  grid() : string {
    return `repeat(${this.slides.length}, 1fr)`;
  }

}