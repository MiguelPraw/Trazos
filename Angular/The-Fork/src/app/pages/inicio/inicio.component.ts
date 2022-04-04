import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliders : any = [
    {
      titulo  : 'Selecciones de TheFork',
      tipo    : 'seleccion',
      elementosVisibles : 3,
      slides  : [
        {
          nombre  : 'Terrazas de esta temporada',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/plsbznezazd2lopzr3mu',
          descripcion : 'Disfruta de los colores de la primavera en las mejores terrazas.',
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : '¡200 YUMS EXTRA!',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/qchcxriwzrhrkwkakksi',
          descripcion : 'Por tiempo limitado, paga con la App y gana Yums extra.',
          boton   : {
            href  : '#',
            title : 'Ver los restaurantes'
          }
        },
        {
          nombre  : 'Tarjeta Regalo TheFork',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/yirkeqwqyzfzzhq9r5yc',
          descripcion : 'Porque el regalo perfecto no existe...',
          boton   : {
            href  : '#',
            title : '¿O quizas si?'
          }
        },
        {
          nombre  : 'Guía MICHELIN',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/WNG-HP-MICHELIN-ES',
          descripcion : '¡Reserva ya en los restaurantes de la Guía MICHELIN en solo tres clics!',
          boton   : {
            href  : '#',
            title : 'Ver los restaurantes'
          }
        },
        {
          nombre  : 'Selección INSIDER',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/bb2hznx3zwissy6v5g9a',
          descripcion : 'Restaurantes que marcan la diferencia y con los que siempre acertarás.',
          boton   : {
            href  : '#',
            title : 'Ver los restaurantes'
          }
        },
        {
          nombre  : 'El doble siempre es mejor',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/nhatfgxv7iy0wrou0o8g',
          descripcion : 'Gana el doble de Yums por reservar en la selección de restaurantes DOBLE YUMS.',
          boton   : {
            href  : '#',
            title : 'Ver los restaurantes'
          }
        },
        {
          nombre  : 'Los favoritos',
          img     : 'https://c.tfstatic.com/w_314,h_228,c_fill,g_auto:subject,q_auto,f_auto/tf-product/banners/mtswn2dpeuxezezyk4lm',
          descripcion : 'Saborea los restaurantes que han llegado a lo más alto gracias a miles de opiniones.',
          boton   : {
            href  : '#',
            title : 'Reserva'
          }
        }
      ]
    },
    {
      titulo  : 'Seleccionados para ti',
      tipo    : 'restaurante',
      elementosVisibles : 4,
      slides  : [
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Antigua',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/e7973540-cb03-4894-b38a-4b40b61e1d89/bac7f1e0-451a-490a-941c-8d273a159eea.jpg',
          tipos   : [ 'Mediterráneo', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '08006 Barcelona',
          offers  : {
            offer   : 50,
            yums    : true
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'MACAO',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/7f7e68ca-89df-4103-82f9-eecdaa589602/f07abab4-0f31-453e-b6a8-ea750397feaa.jpg',
          tipos   : [ 'Japonés', 'Vida nocturna' ],
          nota    : 9.4,
          specs   : {
            insider : false,
            double  : false,
            pay     : false
          },
          descripcion : '28012 Madrid',
          offers  : {
            offer   : 40,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Sumo Grill',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/d8ee9880-b86d-4c77-b555-1f8e0580c80b/b30f76d8-5d44-4fb9-8af0-2327235077cb.jpg',
          tipos   : [ 'Japonés', 'Familia' ],
          nota    : 9.2,
          specs   : {
            insider : false,
            double  : false,
            pay     : false
          },
          descripcion : '28028 Madrid',
          offers  : {
            offer   : 40,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        }
      ]
    },
    {
      titulo  : '¿Dónde puedo ganar más Yums?',
      tipo    : 'restaurante',
      elementosVisibles : 4,
      slides  : [
        {
          nombre  : 'Tangchu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/bfddc5e8-e0ea-42bb-9d52-0ba3c65372b6/d9b6920c-7c50-40a0-b787-b5ccbc95d2ba.jpg',
          tipos   : [ 'Asiático', 'Familia' ],
          nota    : 9.4,
          specs   : {
            insider : false,
            double  : true,
            pay     : true
          },
          descripcion : '28008 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        },
        {
          nombre  : 'Kippu',
          img     : 'https://res.cloudinary.com/tf-lab/image/upload/w_236,h_172,c_fill,g_auto:subject,q_auto,f_auto/restaurant/5d3eb558-0872-4432-b49a-507cc1e1fb38/d159dcb0-40bf-4280-a7ea-3b786602e24b.jpg',
          tipos   : [ 'Japonés', 'Romántico' ],
          nota    : 9.4,
          specs   : {
            insider : true,
            double  : false,
            pay     : false
          },
          descripcion : '28006 Madrid',
          offers  : {
            offer   : 30,
            yums    : false
          },
          boton   : {
            href  : '#',
            title : 'Reserva Ya'
          }
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void { }

}
