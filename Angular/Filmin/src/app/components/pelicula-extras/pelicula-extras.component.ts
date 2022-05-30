import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-extras',
  templateUrl: './pelicula-extras.component.html',
  styleUrls: ['./pelicula-extras.component.scss']
})
export class PeliculaExtrasComponent implements OnInit {

  @Input() extras : any = [];

  constructor() { }

  ngOnInit(): void {
    console.log( this.extras );
  }

}
