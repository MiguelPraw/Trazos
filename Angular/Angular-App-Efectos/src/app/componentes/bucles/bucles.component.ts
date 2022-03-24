import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.scss']
})
export class BuclesComponent implements OnInit {

  semana : string[] = [
    'lunes', 'martes', 'miércoles'
  ]

  clase = [
    { nombre : 'Timmy'    , apellido : 'Anderson'   },
    { nombre : 'John'     , apellido : 'Wick'       },
    { nombre : 'María'    , apellido : 'Valenzuela' },
    { nombre : 'Vladimir' , apellido : 'Putin'      },
  ]

  constructor() { }

  ngOnInit(): void { }

}
