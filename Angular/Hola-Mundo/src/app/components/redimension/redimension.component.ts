import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redimension',
  templateUrl: './redimension.component.html',
  styleUrls: ['./redimension.component.scss']
})
export class RedimensionComponent implements OnInit {

  public urlImg = "";
  public anchoImg = 500;
  public alturaImg = 300;

  constructor() { }

  ngOnInit(): void {
  }

  public inicializaImagen () {
    this.urlImg = `https://picsum.photos/id/200/${this.anchoImg}/${this.alturaImg}`
    return this.urlImg;
  }

  public disminuyeTamano () {
    this.anchoImg = this.anchoImg - 50;
    this.alturaImg = this.alturaImg - 50;
  }

  public aumentaTamano () {
    this.anchoImg = this.anchoImg + 50;
    this.alturaImg = this.alturaImg + 50;
  }

}
