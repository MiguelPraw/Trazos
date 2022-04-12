import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit , OnChanges {

  buscador : boolean = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() : void {
    console.log(this.buscador);
  }

  setBuscador( estado : boolean ) : void {
    this.buscador = estado;
    this.setScroll();
  }

  setScroll() : void {
    document.body.style.overflow = (this.buscador) ? "hidden" : "visible";
  }
  emiteBuscador ( e : any ) : void {
    this.buscador = false;
    console.log(this.buscador);
  }

}
