import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  nombre : string = "Timmy";

  clase : any = [
    { nombre : 'Timmy' , apellido : "Anderson"  },
    { nombre : 'Emma'  , apellido : "Anderson"  },
    { nombre : 'Jorge' , apellido : "Nitales"   },
    { nombre : 'Paco'  , apellido : "Garcia"    },
    { nombre : 'Pedro' , apellido : "Tilla"     },
  ]

  constructor() {}

  ngOnInit(): void {}

}
