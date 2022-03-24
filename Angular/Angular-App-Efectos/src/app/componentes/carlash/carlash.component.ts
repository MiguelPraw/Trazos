import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlash',
  templateUrl: './carlash.component.html',
  styleUrls: ['./carlash.component.scss']
})
export class CarlashComponent implements OnInit {

  items : any[] = [
    { nombre : "ZPump Urban Fit" , marca : "Reebok" },
    { nombre : "Coach2o" , marca : "Font Vella" }, 
    { nombre : "RCar" , marca : "Revista Car" }, 
    { nombre : "Emotional Pulse" , marca : "Seidor" }, 
    { nombre : "Alhambra" , marca : "Cervezas Alhambra" }, 
    { nombre : "Actimel" , marca : "Danone" }, 
    { nombre : "ffuuss" , marca : "OT'S Group" }, 
    { nombre : "Delicious" , marca : "Día" }, 
    { nombre : "Roca" , marca : "Sanitarios" }, 
    { nombre : "Deep State" , marca : "Fox" }
  ]

  constructor() { }

  ngOnInit(): void { }

}
