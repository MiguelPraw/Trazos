import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-imagenes',
  templateUrl: './grid-imagenes.component.html',
  styleUrls: ['./grid-imagenes.component.scss']
})
export class GridImagenesComponent implements OnInit {

  public estado : string = "";

  constructor() { }

  ngOnInit(): void {
    this.estado = "todas";
  }

  public filtraHobbits () {
    this.estado = "hobbits";
  }

  public filtraOrcos () {
    this.estado = "orcos";
  }

  public filtraTodas () {
    this.estado = "todas";
  }

}
