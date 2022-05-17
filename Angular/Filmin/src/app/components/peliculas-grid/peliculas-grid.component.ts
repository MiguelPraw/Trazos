import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPelicula } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-peliculas-grid',
  templateUrl: './peliculas-grid.component.html',
  styleUrls: ['./peliculas-grid.component.scss']
})
export class PeliculasGridComponent implements OnInit {

  @Input() peliculas : IPelicula[] = [];

  rutaActiva : string = '';

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void { 
    this.rutaActiva = this.router.url.split('/')[1];
  }

}
