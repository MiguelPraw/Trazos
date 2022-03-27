import { Component, OnInit } from '@angular/core';
import { Mueble } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  listaMuebles : Mueble[] = [
    { 
      autor       : "Michael W. Dreeben",
      nombre      : "Shell Dining Chair",
      descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa architecto temporibus, ut sequi maxime culpa quia perspiciatis aperiam rem perferendis.",
      src         : "../../../assets/mesa_negra.png"
    },
    { 
      autor       : "Jeaper K. Thomas", 
      nombre      : "Dunes Anthrazite Black", 
      descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa architecto temporibus, ut sequi maxime culpa quia perspiciatis aperiam rem perferendis.", 
      src         : "../../../assets/silla_negra.png" 
    },
    { 
      autor       : "Prueba K. Prueba", 
      nombre      : "Sofá Blanco", 
      descripcion : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsa architecto temporibus, ut sequi maxime culpa quia perspiciatis aperiam rem perferendis.", 
      src         : "../../../assets/sofa_blanco.png" 
    },
  ];

  activo : number = 0;

  constructor() { }

  ngOnInit(): void { }

  setActivo( valor : number ) : void {
    this.activo = valor;
  }

  setActivoWheel(e : any) : void {
    console.log(e);
    ( e.deltaY < 0 ) ? this.activo-- : this.activo++;
    if ( this.activo < 0 ) {
      this.activo = this.listaMuebles.length - 1;
    } else if ( this.activo >= this.listaMuebles.length ) {
      this.activo = 0;
    }
  }

}
