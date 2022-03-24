import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {

  elementos : any[] = [
    {titulo : "Titulo", parrafo : "Lorem ipsum dolor sit amet."},
    {titulo : "Titulo", parrafo : "Lorem ipsum dolor sit amet."},
    {titulo : "Titulo", parrafo : "Lorem ipsum dolor sit amet."},
    {titulo : "Titulo", parrafo : "Lorem ipsum dolor sit amet."}
  ]

  activo : number = -1;

  constructor() { }

  ngOnInit(): void { }

  setParrafo1 (valor : number ) : void {
    this.activo = valor;
  }


}
