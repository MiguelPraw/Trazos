import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-tabs',
  templateUrl: './pelicula-tabs.component.html',
  styleUrls: ['./pelicula-tabs.component.scss']
})
export class PeliculaTabsComponent implements OnInit {

  numero : number = 0;

  constructor(){}

  ngOnInit(): void {}

  setNumero( valor : number ) : void {
    this.numero = valor;
  }

}
