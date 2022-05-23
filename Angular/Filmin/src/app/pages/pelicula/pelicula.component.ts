import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { IPelicula } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit , OnChanges {
  
  pelicula  : IPelicula | any = {};

  constructor(
    private datosService : DatosService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( { url } ) => {
      this.datosService.getPeliculaByUrl( url ).subscribe( ( data : any ) => {
        console.log( data )
        this.pelicula = data.data[0];
      });
    })
  }

  ngOnChanges() : void {
    this.activatedRoute.params.subscribe( ( { url } ) => {
      this.datosService.getPeliculaByUrl( url ).subscribe( ( data : any ) => {
        console.log( data )
        this.pelicula = data.data[0];
      });
    })
  }

}
