import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlash',
  templateUrl: './carlash.component.html',
  styleUrls: ['./carlash.component.scss']
})
export class CarlashComponent implements OnInit {

  items : any[] = [
    { nombre : "ZPump Urban Fit"  , marca : "Reebok"            , fondo : "../../assets/zpump.jpg"            },
    { nombre : "Coach2o"          , marca : "Font Vella"        , fondo : "../../assets/coach2o.jpg"          }, 
    { nombre : "RCar"             , marca : "Revista Car"       , fondo : "../../assets/coche.jpg"            }, 
    { nombre : "Emotional Pulse"  , marca : "Seidor"            , fondo : "../../assets/señor.jpg"            }, 
    { nombre : "Alhambra"         , marca : "Cervezas Alhambra" , fondo : "../../assets/cervezaAlhambra.jpg"  }, 
    { nombre : "Actimel"          , marca : "Danone"            , fondo : "../../assets/actimel.jpg"          }, 
    { nombre : "ffuuss"           , marca : "OT'S Group"        , fondo : "../../assets/movil.jpg"            }, 
    { nombre : "Delicious"        , marca : "Día"               , fondo : "../../assets/DElicious.jpg"        }, 
    { nombre : "Roca"             , marca : "Sanitarios"        , fondo : "../../assets/roca.jpg"             }, 
    { nombre : "Deep State"       , marca : "Fox"               , fondo : "../../assets/deepState.jpg"        }
  ];

  actual : number = -1;

  constructor() { }

  ngOnInit(): void { }

  setActual( indice : number ) : void {
    this.actual = indice;
  }

}
