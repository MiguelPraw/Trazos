import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';

@Component({
  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.component.html',
  styleUrls: ['./ficha-personaje.component.scss']
})
export class FichaPersonajeComponent implements OnInit {

  @Input () personaje:Personaje|any;
  @Output () fav = new EventEmitter(); //Evento personalizado

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log('Evento emitido');
    this.fav.emit(this.personaje.name);
  }

}
