import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { IPelicula, IResponsePeliculas } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  peliculas : IPelicula[] = [];

  constructor(
    private datosService : DatosService
  ) { }

  ngOnInit(): void {
    this.datosService.getPeliculas().subscribe( ( data : IResponsePeliculas ) => {
      this.peliculas = data.data;
      console.log(this.peliculas);
    });
  }

}
