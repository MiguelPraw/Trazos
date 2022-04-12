import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  pelicula : string = "";

  peliculas : any = [];

  constructor(
    private datosService : DatosService
  ) { }

  ngOnInit(): void {
    this.peliculas = this.datosService.peliculas;
  }

}
