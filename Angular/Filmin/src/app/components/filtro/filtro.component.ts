import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  filtro : boolean = false;

  rutaActiva : string = '';

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.rutaActiva = this.router.url.split('/')[1];
  }

  setFiltro() : void {
    this.filtro = !this.filtro;
  }

}
