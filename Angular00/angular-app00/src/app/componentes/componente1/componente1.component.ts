import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/interfaces'

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {

  nombre    : string    = 'Timmy';
  apellido  : string    = 'Anderson';
  edad      : number    = 32;
  meQuiere  : boolean   = false;
  semana    : string[]  = ['lunes', 'martes', 'miercoles'];

  alumno : Estudiante = {
    nombre    : 'Emma',
    apellido  : 'Watson'
  }

  constructor() {}

  ngOnInit(): void {}

  saludo() : string {
    return 'hola';
  }

}
