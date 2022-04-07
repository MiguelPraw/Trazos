import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  url : string = "";
  peliculas : any[] = [];
  
  pelicula  : any = {};

  constructor(
    private datosService : DatosService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( { url } ) => {
      this.url = url;
    });

    this.peliculas = this.datosService.peliculas;
    console.log(this.peliculas);

    this.pelicula = this.datosService.peliculas.find( ( cadaPelicula : any ) => {
      return cadaPelicula.url === this.url;
    });
    console.log(this.pelicula);
  }

  backgroundImage () : string {
    return `url(${this.pelicula.src})`;
  }

}
