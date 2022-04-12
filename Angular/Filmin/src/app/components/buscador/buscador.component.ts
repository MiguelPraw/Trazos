import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  pelicula  : string = "";
  peliculas : any = [];

  @Output() ocultarBuscador : EventEmitter<any> = new EventEmitter<any>()
    
  constructor(
    private datosService : DatosService,
    private router        : Router
  ) { }

  ngOnInit(): void {
    this.peliculas = this.datosService.peliculas;
  }

  navegar( base : string , url : string  ) : void{
    this.router.navigate( [base , url ]);
  }

  emiteBuscador() : void {
    this.ocultarBuscador.emit( false );
  }

}
