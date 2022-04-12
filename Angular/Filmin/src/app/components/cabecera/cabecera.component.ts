import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  buscador : boolean = false;

  constructor() { }

  ngOnInit(): void { }

  setBuscador( evento : MouseEvent ) : void {
    evento.preventDefault();
    this.buscador = !this.buscador;
    if( evento.target !== document.querySelector('.buscador')) {
      this.buscador = true;
    }
    this.setScroll();
  }

  setScroll() : void {
    document.body.style.overflow = (this.buscador) ? "hidden" : "visible";
  }

}
