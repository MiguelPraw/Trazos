import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  nombrePokemon : string = "";

  @Output() enviarPokemon : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  emiteNombre() : void {
    // console.log(e)
    // console.log(this.nombrePokemon);
    this.enviarPokemon.emit( this.nombrePokemon );
  }

}
