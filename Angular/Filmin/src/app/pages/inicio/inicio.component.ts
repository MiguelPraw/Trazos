import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliderCabecera    : any[] = [];
  sliderCategorias  : any[] = [];
  slidersInicio     : any[] = [];

  constructor(
    private datosService : DatosService
  ) { }

  ngOnInit(): void { 
    // this.sliderCabecera   = this.datosService.sliderCabecera;
    // this.sliderCategorias = this.datosService.sliderCategorias;
    // this.slidersInicio    = this.datosService.slidersInicio;

    this.datosService.getInicio().subscribe( data => {
      const { sliderCategorias , sliderCabecera } = data.data;
      let slidersInicio : any = data.data.slidersInicio.map( (slider : any) => {
        return { ...slider , items : data.data.peliculas }
      });
      this.slidersInicio = slidersInicio;
      this.sliderCabecera = sliderCabecera;
      this.sliderCategorias = sliderCategorias;
      console.log( this.sliderCategorias );
    });
  }

}
