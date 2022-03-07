import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-listado-alumnos-page',
  templateUrl: './listado-alumnos-page.component.html',
  styleUrls: ['./listado-alumnos-page.component.scss']
})
export class ListadoAlumnosPageComponent implements OnInit {

  public entradaNombre:string = "";

  public listaAlumnos:IAlumno[] = [
    {nombre:"Pepe", apellidos:"Gómez", fecha:1999},
    {nombre:"María", apellidos:"Hernández", fecha:1994},
    {nombre:"Marta", apellidos:"Gómez", fecha:1989}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.listaAlumnos.push( { nombre:this.entradaNombre, apellidos:"TEST", fecha: 1995 } );
    this.entradaNombre = "";
  }

}
