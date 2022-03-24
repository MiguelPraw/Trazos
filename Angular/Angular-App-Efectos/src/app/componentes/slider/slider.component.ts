import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  foto : number = 0;

  constructor() { }

  ngOnInit(): void { }

  aumentarFoto() : void {
    (this.foto >= 2) ? this.foto = 0 : this.foto++;
  }

  disminuirFoto() : void {
    (this.foto <= 0) ? this.foto = 2 : this.foto--;
  }

  setFoto( valor : number ) : void {
    this.foto = valor;
  }

  fotos : any[] = [
    { src : "/assets/scale-1.jpeg" , alt : "Ant Man" },
    { src : "/assets/scale-2.jpeg" , alt : "Walking Dead" },
    { src : "/assets/scale-3.jpeg" , alt : "Nestle Jungly" }
  ]

  activo : number = 0;

  aumentarActivo() : void {
    (this.activo >= this.fotos.length - 1) ? this.activo = 0 : this.activo++;
  }

  disminuirActivo() : void {
    (this.activo <= 0) ? this.activo = this.fotos.length - 1 : this.activo--;
  }

  setActivo ( valor : number ) : void {
    this.activo = valor;
  }


}
