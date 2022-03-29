import { Component, HostListener, OnInit } from '@angular/core';
import { Mueble } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @HostListener("wheel", ['$event'])
  onScroll( e : any ) {
    e.preventDefault();
    if(this.ruedaActiva) {
      this.ruedaActiva = false;
      ( e.deltaY < 0 ) ? this.activo-- : this.activo++;
      if ( this.activo < 0 ) {
        this.activo = this.listaMuebles.length - 1;
      } else if ( this.activo >= this.listaMuebles.length ) {
        this.activo = 0;
      }
      setTimeout ( ()=> {
        this.ruedaActiva = true;
      }, 1500)
    }
  }

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

  ruedaActiva : boolean = true;

  activo : number = 0;

  constructor() { }

  ngOnInit(): void { }

  setActivo( valor : number ) : void {
    this.activo = valor;
  }

  setActivoWheel( e : WheelEvent ) : void {
    ( e.deltaY < 0 ) ? this.activo-- : this.activo++;
    if ( this.activo < 0 ) {
      this.activo = this.listaMuebles.length - 1;
    } else if ( this.activo >= this.listaMuebles.length ) {
      this.activo = 0;
    }
  }

  translateY() : string {
    return `translateY(-${this.activo * (100 / this.listaMuebles.length)}%)`;
  }


}
