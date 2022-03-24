import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  activo : boolean = false;

  constructor() { }

  ngOnInit(): void { }

  cambiarActivo() : void {
    this.activo = !this.activo;
  }

  activo1 : boolean = false;
  cambiarActivo1() : void {
    this.activo1 = !this.activo1;
  }

  activo2 : boolean = false;
  cambiarActivo2() : void {
    this.activo2 = !this.activo2;
  }

  activo3 : boolean = false;
  cambiarActivo3() : void {
    this.activo3 = !this.activo3;
  }

  foto : number = 0;

  aumentarFoto() : void {
    ( this.foto >= 2 ) ? this.foto = 0 : this.foto++;
  }

  disminuirFoto() : void {
    ( this.foto <= 0 ) ? this.foto = 2 : this.foto--;
  }

  cambiarFoto( valor : number ) : void {
    this.foto = valor;
  }

  foto1 : number = 0;

  aumentarFoto1() : void {
    ( this.foto1 >= 2 ) ? this.foto1 = 0 : this.foto1++;
  }

  disminuirFoto1() : void {
    ( this.foto1 <= 0 ) ? this.foto1 = 2 : this.foto1--;
  }

  cambiarFoto1( valor : number ) : void {
    this.foto1 = valor;
  }

}
