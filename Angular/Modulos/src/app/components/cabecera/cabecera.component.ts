import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  menu : Menu[] = [
    { nombre : "Inicio" , url : "/" },
    { nombre : "Trabajos" , url : "/trabajos" },
    { nombre : "Contacto" , url : "/contactos" }
  ]

  constructor() { }

  ngOnInit(): void { }

}
