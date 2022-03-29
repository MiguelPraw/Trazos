import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos-en-linea',
  templateUrl: './estilos-en-linea.component.html',
  styleUrls: ['./estilos-en-linea.component.scss']
})
export class EstilosEnLineaComponent implements OnInit {

  numero : number = 1;

  constructor() { }

  ngOnInit(): void { }

  aumentar() : void {
    this.numero++;
  }

  disminuir() : void {
    this.numero--;
  }

  ancho() : string {
    return `200px`;
  }

  alto() : string {
    return `200px`;
  }

  fondo() : string {
    return `red`;
  }

  translate() : string {
    return `translateX(${this.numero}0%)`;
  }

}
