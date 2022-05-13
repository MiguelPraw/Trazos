import { Component, Input, OnInit } from '@angular/core';
import { IPelicula } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-peliculas-grid',
  templateUrl: './peliculas-grid.component.html',
  styleUrls: ['./peliculas-grid.component.scss']
})
export class PeliculasGridComponent implements OnInit {

  @Input() peliculas : IPelicula[] = [];

  constructor() { }

  ngOnInit(): void { }

}
