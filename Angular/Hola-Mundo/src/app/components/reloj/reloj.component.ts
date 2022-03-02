import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnInit {
  segundos:number = 0;
  ref_intervalo:any;

  constructor() { }

  ngOnInit(): void {
  }

  public start () {
    this.ref_intervalo = setInterval ( () => {
      this.segundos++;
    }, 1000);
  }

  public stop () {
    clearInterval(this.ref_intervalo);
  }

}
