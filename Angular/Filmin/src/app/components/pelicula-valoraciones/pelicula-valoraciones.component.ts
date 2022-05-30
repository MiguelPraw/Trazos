import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-valoraciones',
  templateUrl: './pelicula-valoraciones.component.html',
  styleUrls: ['./pelicula-valoraciones.component.scss']
})
export class PeliculaValoracionesComponent implements OnInit {

  @Input() valoraciones : any = {};

  constructor() { }

  ngOnInit(): void { 
    console.log(this.valoraciones);
  }

}
