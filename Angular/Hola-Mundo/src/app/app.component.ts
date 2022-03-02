import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'Hola-Mundo';
  public nombre:string = 'Jacinto';
  public contador:number = 0;

  constructor () {
    //this.title = "PEPE" + 9;
  }

  public go_prev () {
    console.log("Prev");
    this.contador--;
  }

  public go_next () {
    console.log("Next");
    this.contador++;
  }

}
