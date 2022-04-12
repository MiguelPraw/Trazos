import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Peticiones';

  datos : any = [];

  constructor(
    private httpClient : HttpClient
  ) {}

  ngOnInit() : void {
    this.httpClient
      .get("https://pokeapi.co/api/v2/pokemon")
      .subscribe( (datos : any) => {
        this.datos = datos.results;
      });
  }

}
