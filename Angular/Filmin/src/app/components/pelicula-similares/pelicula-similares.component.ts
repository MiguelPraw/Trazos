import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { IPelicula } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-pelicula-similares',
  templateUrl: './pelicula-similares.component.html',
  styleUrls: ['./pelicula-similares.component.scss']
})
export class PeliculaSimilaresComponent implements OnInit {

  @Input() director : string = '';

  peliculas : IPelicula[] = [];

  constructor(
    private datosService : DatosService
  ) { }

  ngOnInit(): void {
    this.datosService.getPeliculasByDirector( this.director ).subscribe( ( data : any ) => {
      this.peliculas = data.data;
    })
  }

}
