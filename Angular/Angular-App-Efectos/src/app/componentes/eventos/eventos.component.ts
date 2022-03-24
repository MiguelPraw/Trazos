import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  // activo : boolean = false;

  // activo1 : boolean = false;
  // activo2 : boolean = false;
  // activo3 : boolean = false;
  // activo4 : boolean = false;
  // activo5 : boolean = false;

  foto : number = 0;

  constructor() { }

  ngOnInit(): void { }

  // metodo() : void {
  //   this.activo = !this.activo;
  // }

  // metodo1() : void {
  //   this.activo1 = !this.activo1;
  // }

  // metodo2() : void {
  //   this.activo2 = !this.activo2;
  // }

  // metodo3() : void {
  //   this.activo3 = !this.activo3;
  // }

  // metodo4() : void {
  //   this.activo4 = !this.activo4;
  // }

  // metodo5() : void {
  //   this.activo5 = !this.activo5;
  // }

  aumentarFoto() : void {
    this.foto++;
    if ( this.foto >= 3 ) {
      this.foto = 0;
    }
  }

  disminuirFoto() : void {
    if ( this.foto <= 0 ) {
      this.foto = 3;
    }
    this.foto--;
  }

  cambiarFoto( valor : number ) : void {
    this.foto = valor;
  }

  foto1 : number = 0;

  aumentarFoto1() : void {
    this.foto1++;
    if (this.foto1 >= 3) {
      this.foto1 = 0;
    }
  }

  disminuirFoto1() : void {
    if ( this.foto1 <= 0 ) {
      this.foto1 = 3;
    }
    this.foto1--;
  }

  cambiarFoto1 ( valor : number ) : void {
    this.foto1 = valor;
  }

  foto2 : number = 0;

  aumentarFoto2() : void {
    this.foto2++
    if ( this.foto2 >= 3 ) {
      this.foto2 = 0;
    }
  }

  disminuirFoto2() : void {
    if ( this.foto2 <= 0 ) {
      this.foto2 = 3;
    }
    this.foto2--;
  }

  cambiarFoto2( valor : number ) {
    this.foto2 = valor;
  }

  foto3 : number = 0;

  aumentarFoto3() : void {
    this.foto3++;
    if ( this.foto3 >= 3 ) {
      this.foto3 = 0;
    }
  }

  disminuirFoto3() : void {
    if ( this.foto3 <= 0 ) {
      this.foto3 = 3;
    }
    this.foto3--;
  }

  cambiarFoto3( valor : number ) {
    this.foto3 = valor;
  }

  aumentaTernario() : void {
    /* SIN VALOR */
    // ( this.foto3 >= 2 ) ? this.foto3 = 0 : this.foto3++;

    /* CON VALOR */
    this.foto3 = ( this.foto3 >= 2 ) ? 0 : this.foto3 + 1;
  }

}
