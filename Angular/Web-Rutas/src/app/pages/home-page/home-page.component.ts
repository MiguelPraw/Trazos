import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    console.log("Construido home");
  }

  ngOnInit(): void {
    console.log("Init Home");
  }

}
