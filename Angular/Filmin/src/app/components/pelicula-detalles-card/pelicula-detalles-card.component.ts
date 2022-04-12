import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-detalles-card',
  templateUrl: './pelicula-detalles-card.component.html',
  styleUrls: ['./pelicula-detalles-card.component.scss']
})
export class PeliculaDetallesCardComponent implements OnInit {

  @Input() detalles : any = {}
  @Input() tipo     : string = "";

  constructor() { }

  ngOnInit(): void {}

}
