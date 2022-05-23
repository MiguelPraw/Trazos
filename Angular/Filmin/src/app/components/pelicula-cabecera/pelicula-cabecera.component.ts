import { Component, Input, OnInit } from '@angular/core';
import { IPelicula } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-pelicula-cabecera',
  templateUrl: './pelicula-cabecera.component.html',
  styleUrls: ['./pelicula-cabecera.component.scss']
})
export class PeliculaCabeceraComponent implements OnInit {

  @Input() pelicula  : IPelicula | any = {};

  constructor(){}

  ngOnInit(): void { 
    console.log( this.pelicula )
  }

}
