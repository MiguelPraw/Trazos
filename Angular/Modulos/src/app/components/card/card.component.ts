import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() nombre    : string = "Nombre por defecto";
  @Input() apellido  : string = "Apellido por defecto";
  @Input() edad      : number = 0;

  constructor() { }

  ngOnInit(): void { }

}
