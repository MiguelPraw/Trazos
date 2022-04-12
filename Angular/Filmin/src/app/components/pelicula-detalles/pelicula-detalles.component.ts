import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-detalles',
  templateUrl: './pelicula-detalles.component.html',
  styleUrls: ['./pelicula-detalles.component.scss']
})
export class PeliculaDetallesComponent implements OnInit {

  @Input() detalles : any = {};

  constructor() { }

  ngOnInit(): void {}

}
