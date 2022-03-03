import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-impar',
  templateUrl: './par-impar.component.html',
  styleUrls: ['./par-impar.component.scss']
})
export class ParImparComponent implements OnInit {
  public contador : number = 0;
  public urlImagen : string = "https://picsum.photos/id/237/200/300";

  constructor() { }

  ngOnInit(): void {
  }

  public sumar () {
    this.contador++;
  }

  public restar () {
    this.contador--;
  }

  public isPar ():boolean {
    if (this.contador % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

}
