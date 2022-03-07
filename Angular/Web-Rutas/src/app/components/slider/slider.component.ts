import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public listaImagenes = [
    "https://picsum.photos/id/210/800/600",
    "https://picsum.photos/id/220/800/600",
    "https://picsum.photos/id/230/800/600",
    "https://picsum.photos/id/240/800/600"
  ];

  public imagenActiva:string = "";

  constructor() { }

  ngOnInit(): void {
    this.imagenActiva = this.listaImagenes[0];
  }

}