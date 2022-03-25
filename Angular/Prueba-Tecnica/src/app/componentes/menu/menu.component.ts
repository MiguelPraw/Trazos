import { Component, OnInit } from '@angular/core';
import { Menu, ElementoLista } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu : Menu = {
    empresa : "mater",
  }

  listaMenu : ElementoLista[] = [
      { nombre : "Collection"   , elementos : [ "Furniture", "Lighting", "Accessories"]},
      { nombre : "Design"       , elementos : [ "Lorem" ]},
      { nombre : "Craftmanship" , elementos : [ "Lorem" ] },
      { nombre : "Ethics"       , elementos : [ "Lorem" ] }
    ]

  activo : boolean = true;
  
  over   : boolean = true;

  constructor() { }

  ngOnInit(): void { }

  setActivo() : void {
    this.activo = !this.activo;
  }

  setOver() : void {
    this.over = !this.over;
  }

}
