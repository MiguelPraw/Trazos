import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  clase : any[] = [
    { nombre : "Emma"   , apellido : "Watson"     , edad : 32 },
    { nombre : "Will"   , apellido : "Smith"      , edad : 53 },
    { nombre : "Timmy"  , apellido : "Anderson"   , edad : 22 }
  ]

  constructor() { }

  ngOnInit(): void { }

}
