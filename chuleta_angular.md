<style>
    .titulo {
        font-size: 20px;
    }

    h1 {
        text-align: center;
        font-weight: bold;
        color: orange;
    }

    h2 {
        font-weight: bold;
        text-align: center;
        margin: 20px;
        color: orange;
    }

    h3 {
        color: tomato;
        text-align: center;
        margin: 20px;
    }

    h4 {
        color: tomato;
        text-align: center;
        margin: 20px;
    }

    i {
        font-weight: bold;
    }
</style>

# Angular

## Decoradores

Son funciones que se ejecutan antes de instanciar un objeto.

```ts

function Component ( datos ) {
    console.log( datos );
}

@Component ({
    nombre : 'componente',
    apellido : 'hola',
    edad : 32
})

class Componente {
    nombre : string;
    apellido : string;

    constructor ( nombre : string , apellido : string ) {}

    saludo () : void {}
    despedida () : string { return 'adsds' }
}

```

## Angular CLI

Tiene Angular CLI (Command-Line Interface), es decir, tiene su propia sintaxis dentro de la linea de comandos del terminal. 

#### Instalación

```bash
npm install -g @angular/cli
```

```bash
# Crea la aplicación
ng new <nombreApp>
ng n <nombreApp>

#Entrar en la carpeta
cd <nombreApp>

# Inicia el servidor
ng serve -o
ng s -o 
npm run start            
```

#### Comandos Generate

En la carpeta raiz del proyecto:

```bash
ng generate componente nombre-componente
ng g c nombre-componente
```

```bash
ng generate service nombre-service
ng g s nombre-service
```

```bash
ng generate module nombre-modulo
ng g m nombre-modulo
```

#### Crear un Componente

```bash
ng generate componente carpeta/nombre-componente
ng g c carpeta/nombre-componente
```

## Interpolación

Permiten mostrar el valor de propiedades, de métodos que devuelvan un valor o escribir expresiones.

```html
<h1> {{ nombreVariable }} </h1>
```

## Directivas

Atributos de las etiquetas para marcar pautas.

```html
<div *ngFor=""></div>
<div *ngIf=""></div>
<div [ngStyle]=""></div>
<div [ngClass]=""></div>
<div (click)="metodo()"></div>
<div [(ngModel)]=""></div>
```

## Eventos

```html
<h1 [ngClass]=" { 'verde' : activo , 'grande' : true } "> Lorem ipsum </h1>
```

Si queremos indicar a un atributo de HTML que le vamos a pasar un parámetro, se mete entre [].

```html
<li 
    *ngFor=" let li of elementos; let i = index "
    class="header__li">
    <a class="header__a" [href]="li.url"> {{ li.nombre }} </a>
</li>
```

## NgStyle

Para calcular la cantidad de translate en un slider:

    posicionElemento * (100% / numElemento)


```html
<div
    [ngStyle]="{
        transform : translateY()
    }"
    class="columna">
</div>
```

```ts
translateY() : string {
    return `translateY(${this.numero} * (100 / lista.lenght))`;
}
```

## Input y Output

El input sirve para transmitir información desde el componente padre al hijo, mientras que el output se utiliza para comunicar al hijo con el padre.

## Routing

Se nos genera un TypeScript llamado *app-routing.module.ts*.
Modificamos la constante *routes* y añadimos las rutas:

```ts
const routes: Routes = [
  { path : ''         , component : InicioComponent     },
  { path : 'trabajos' , component : TrabajosComponent   },
  { path : 'contacto' , component : TrabajosComponent   },
  /* Para cualquier ruta no especificada, redirige a Inicio */
  { path : '**'       , component : InicioComponent     }
];
```

```html
<ul>
    <li><a [routerLink]=" ['/'] ">Inicio</a></li>
    <li><a [routerLink]=" ['/trabajos'] ">Trabajos</a></li>
    <li><a [routerLink]=" ['/contacto'] ">Contacto</a></li>
</ul>
```

Si queremos añadir un parámetro a la URL, modificamos el Routing normal:

```ts
const routes: Routes = [
  { path : ''                         , component : InicioComponent     },
  { path : 'trabajos/:nombreVariable' , component : TrabajosComponent   }
];
```

```html
<ul>
    <li><a [routerLink]=" ['/'] ">Inicio</a></li>
    <li><a [routerLink]=" ['/trabajos' , 'Timmy'] ">Trabajos</a></li>
    <li><a [routerLink]=" ['/contacto'] ">Contacto</a></li>
</ul>
```

```ts
export class TrabajosComponent implements OnInit {

  nombre : string = ''

  constructor( 
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( { nombre } ) => {
      this.nombre = nombre;
    });
  }

}
```

## Módulos

Una vez creado el proyecto, generamos los módulos. Indicamos el nombre de la carpeta que queremos modularizar. Nos va a generar un *components.module.ts*

```bash
ng g m components
ng g m pages
```

En el *app.module.ts*, añadimos e importamos los nuevos módulos dentro de *imports*.

```ts
imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
```

En el archivo *components.module.ts* que nos genera, tendremos que añadir dentro del decorador el parámetro *exports : []*, que rellenaremos con los componentes que queremos exportar. En *declarations* añadiremos todos los componentes del módulo.

Para utilizar otros módulos dentro del que acabamos de crear, tenemos que añadir en *imports* aquellos que querramos usar, como por ejemplo *AppRouterModule*

```ts
@NgModule({
  declarations: [
    CabeceraComponent,
    PieComponent
  ],
  exports: [                        // Añadimos esta línea
    CabeceraComponent,
    PieComponent
  imports: [
    CommonModule,
    AppRouterModule
  ]
})
```

## Servicios

Es un objeto independiente que se puede utilizar en cualquier componente.

Creamos en la terminal el servicio:

```bash
ng g s services/datos
```

Lo importamos y añadimos en [providers] dentro de app.module.ts

```ts
import { ProfesorService } from 'ruta';
providers : [ ProfesorService ]
```

Lo importamos en el componente que lo necesitemos

```ts
import { ProfesorService } from 'ruta';
```

Lo añadimos al constructor con su propio nombre para usarlo en la clase

```ts
constructor( private profesorService : ProfesorService ) {}
```

## Formularios

### Formularios Normales

1. Importar en el `app.module.ts` o en el módulo que lo requiera `FormsModule`.
2. Generar una propiedad en el `component.ts`.
3. Añadir la directiva `[(ngModel)]="nombre"`, con el mismo nombre que la propiedad, y el `name="nombre"` en el `input`.

```html
<input 
        type="text" 
        name="nombre"
        [(ngModel)]="nombre"
        #fNombre="ngModel"
        required
        minlength="3"
        autocomplete="off"
        pattern="[a-zA-Z0-9]{3,16}">

        <!--  ESTADOS  -->

        <p 
            *ngIf=" fNombre.invalid && fNombre.touched && fNombre.dirty "
            class="error">Introduce bien el nombre</p>

        {{ fNombre.valid }}           <!--  Comprueba las validaciones  -->
        {{ fNombre.invalid }}         <!--  Opuesto a valid  -->
        {{ fNombre.touched }}         <!--  Comprueba cuando el cursor ha estado en el input  -->
        {{ fNombre.dirty }}           <!--  Cuando el usuario ha escrito algo  -->
        {{ fNombre.pristine }}        <!--  Cuando el input nunca ha sido usado  -->
```

### Formularios Reactivos

1. Importamos en el `app.module.ts` o en módulo que lo requiera `ReactiveFormsModule`
2. Importar en el Componente `FormBuilder`, `FormGroup` y `Validators`

```ts
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

3. Modificamos el TypeScript y añadimos los Validators:

```ts
nombreFormulario : FormGroup = this.fb.group({
    nombreUsuario : [ 
      'Timmy' , 
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern(''),
      ]
    ],
    email : ['timmy@mail.com'],
    edad : 32
  });

  constructor(
    private fb : FormBuilder
  ) { }
```

4. En el HTML creamos el formulario y las validaciones.

```html
<form [formGroup]="nombreFormulario">
    <input formControlName="nombreUsuario" type="text" placeholder="Nombre">
    <input formControlName="email" type="email">
    <input formControlName="edad" type="number">
</form>

{{ contacto.controls['nombreUsuario'].valid }}
```

## Pipes

```bash
  ng g p pipes/nombrePipe
```

En el `pipe.ts` alteramos dentro del `transform` el `value` que recibimos y lo devolvemos como queramos.

```ts
export class UnoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let buscar = value.filter( ( alumno : any ) => {
      return alumno.nombre.toLowerCase().includes( args[0].toLowerCase() );
    })
    return buscar;
  }
}
```

## Peticiones

1. Importar el módulo:

```ts
import { HttpClientModule } from '@angular/common/http';
```

2. Lo declaramos en el `component.ts`:

```ts
constructor(
    private httpClient : HttpClient
  ) {}
```