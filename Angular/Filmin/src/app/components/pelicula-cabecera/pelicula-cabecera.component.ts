import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-cabecera',
  templateUrl: './pelicula-cabecera.component.html',
  styleUrls: ['./pelicula-cabecera.component.scss']
})
export class PeliculaCabeceraComponent implements OnInit {

  @Input() pelicula  : any = {};

  constructor(){}

  ngOnInit(): void { }

}
