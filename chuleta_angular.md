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
<div (click)=""></div>
<div [(ngModel)]=""></div>
```




