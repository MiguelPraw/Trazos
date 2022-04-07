import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliders : any = [];

  constructor(
    private datosService : DatosService
  ) { }

  ngOnInit(): void { 
    this.sliders = this.datosService.slidersInicio;
  }

}
