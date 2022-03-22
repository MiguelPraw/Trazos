import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

  semana  : string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  clase   : Estudiante[] = [
    { nombre : 'Timmy'  , apellido : 'Anderson' },
    { nombre : 'Emma'   , apellido : 'Watson'   },
    { nombre : 'Tony'   , apellido : 'Stark'    },
  ]

  thefork : any = [
    {
      titulo    : 'Selecciones de TheFork',
      elementos : [
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        }
      ]
    },
    {
      titulo    : 'Selecciones de TheFork',
      elementos : [
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        }
      ]
    },
    {
      titulo    : 'Selecciones de TheFork',
      elementos : [
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        },
        {
          imagen      : '#',
          titulo      : 'Terrazas de esta temporada',
          descripcion : 'Lorem ipsum',
          boton       : 'Reserva Ya'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {}

}
