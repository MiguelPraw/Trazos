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
    { 
      nombre : "Collection", 
      elementos : [ 
        { nombre : "Furniture"  , src : "../../../assets/sofa_blanco.png" },
        { nombre : "Lighting"   , src : "../../../assets/sofa_blanco.png" },
        { nombre : "Accesories" , src : "../../../assets/sofa_blanco.png" }
      ]
    },
    { 
      nombre : "Design", 
      elementos : [
        { nombre : "Furniture" , src : "" } 
      ] 
    },
    { 
      nombre : "Craftmanship", 
      elementos : [
        { nombre : "Furniture" , src : "" }
      ]
    },
    { 
      nombre : "Ethics", 
      elementos : [
        { nombre : "Furniture" , src : "" }
      ]
    }
  ];

  footer : any[] = [
    "About",
    "Contact",
    "Dealers",
    "News",
    "Care",
    "Press"
  ]

  activo : boolean = false;
  over : number = -1;
  srcActiva : string = "";

  constructor() { }

  ngOnInit(): void { }

  setActivo() : void {
    this.activo = !this.activo;
  }

  setOver( valor : number) : void {
    this.over = valor;
  }

  setSrcActiva( valor : string ) : void {
    this.srcActiva = valor;
  }

}
