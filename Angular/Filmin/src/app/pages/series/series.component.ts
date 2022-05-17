import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { IPelicula, IResponsePeliculas } from 'src/interfaces/filmin.interfaces';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series : IPelicula[] = [];

  constructor(
    private datosService : DatosService
  ) { }

  ngOnInit(): void {
    this.datosService.getSeries().subscribe( ( data : IResponsePeliculas ) => {
      this.series = data.data;
    });
  }

}
