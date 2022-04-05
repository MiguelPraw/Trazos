import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-peliculas',
  templateUrl: './slider-peliculas.component.html',
  styleUrls: ['./slider-peliculas.component.scss']
})
export class SliderPeliculasComponent implements OnInit {

  @Input() slider : any = {}

  constructor() { }

  ngOnInit(): void { }

}
