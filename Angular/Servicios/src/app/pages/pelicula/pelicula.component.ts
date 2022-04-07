import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  url       : string  = "";
  pelicula  : any     = {};
  
  constructor( 
    private activatedRoute  : ActivatedRoute,
    private datosService    : DatosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( { url } ) => {
      this.url = url;
    });

    this.pelicula = this.datosService.peliculas.find( ( cadaPelicula : any ) => {
      return cadaPelicula.url === this.url;
    });

  }
}
