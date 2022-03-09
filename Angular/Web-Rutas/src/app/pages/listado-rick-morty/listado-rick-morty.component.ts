import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta, Info, Personaje, Location } from 'src/app/models/personaje.model';
import { ApiRickMortyService } from 'src/app/services/api-rick-morty.service';

@Component({
  selector: 'app-listado-rick-morty',
  templateUrl: './listado-rick-morty.component.html',
  styleUrls: ['./listado-rick-morty.component.scss']
})
export class ListadoRickMortyComponent implements OnInit {

  public url_base = "https://rickandmortyapi.com/api";

  public num_personajes:number = 0;
  public personajes:Personaje[] = [];
  public pagina = 1;

  constructor ( private api:ApiRickMortyService ) { 
    
  }

  ngOnInit(): void {

    let resultado = this.api.getPersonajes(this.pagina);
    resultado.subscribe( respuesta => {
      console.log( 'TODO OK' );
      console.log( respuesta );
      this.personajes = <Personaje[]>respuesta.results;
      this.num_personajes = this.personajes.length;
    }, error => {
      console.log( 'ERROR' );
      console.log( error );
    });

    let boton:any = document.querySelector('#anterior');
    boton.disabled = true;
    

  }

  siguiente() {
    this.pagina++;
    let boton:any = document.querySelector('#anterior');
    boton.disabled = false;
    let resultado = this.api.getPersonajes(this.pagina);
    resultado.subscribe ( respuesta => {
      this.personajes = <Personaje[]>respuesta.results;
    }, error => {
      console.log(error);
    });
  }

  anterior() {
    this.pagina--;
    let resultado = this.api.getPersonajes(this.pagina);
    resultado.subscribe ( respuesta => {
      this.personajes = <Personaje[]>respuesta.results;
    }, error => {
      console.log(error);
    });
    if (this.pagina === 1) {
      let boton:any = document.querySelector('#anterior');
      boton.disabled = true;
    }
  }

  detectarEvento(evento:any){
    console.log("Evento Cazado Fuera");
    console.log(evento);
  }

}
