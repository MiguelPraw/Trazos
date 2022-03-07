import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  imagenSrc:string = "";

  constructor() { }

  ngOnInit(): void {
    let random = Math.round(Math.random() * 200);
    this.imagenSrc = `https://picsum.photos/id/${random}/800/600`;
  }

  public cambiaImagen () {
    let random = Math.round(Math.random() * 200);
    this.imagenSrc = `https://picsum.photos/id/${random}/800/600`;
  }

}
