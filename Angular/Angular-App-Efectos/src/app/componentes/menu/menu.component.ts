import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu : boolean = true;

  elementos = [ 
    { nombre : 'Inicio'   , url : '#' },
    { nombre : 'Trabajos' , url : '#' },
    { nombre : 'Contacto' , url : '#' },
    { nombre : 'About'    , url : '#' },
  ];

  constructor() { }

  ngOnInit(): void { }

  setMenu() : void {
    this.menu = !this.menu;
  }

}
