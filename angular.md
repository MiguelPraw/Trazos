# Angular
Angular es conocido como un framework aunque en realidad es una plataforma, es decir existe un ecosistema alrededor de lo que se conoce como Angular y su organización está basada en el patrón MVC.
  
- [Angular](#angular)
- [Información sobre Angular](#información-sobre-angular)
    - [Versiones:](#versiones)
    - [Ecosistema de Angular](#ecosistema-de-angular)
    - [Trabajando con Angular](#trabajando-con-angular)
- [Angular CLI](#angular-cli)
    - [Instalar CLI](#instalar-cli)
    - [Lista de comandos](#lista-de-comandos)
    - [Comandos para trabajar](#comandos-para-trabajar)
      - [Comandos para: Componentes](#comandos-para-componentes)
      - [Comandos para: Módulos](#comandos-para-módulos)
      - [Comandos para: Deploy](#comandos-para-deploy)
- [Cómo estructurar la app (Próximamente)](#cómo-estructurar-la-app-próximamente)
- [Archivos de configuración](#archivos-de-configuración)
  - [angular.json](#angularjson)
- [Módulos](#módulos)
  - [Crear un módulo](#crear-un-módulo)
  - [Añadiendo un modulo a `app.module.ts`](#añadiendo-un-modulo-a-appmodulets)
  - [Gestión de componentes](#gestión-de-componentes)
    - [Declarando componentes](#declarando-componentes)
    - [Exportando componentes](#exportando-componentes)
    - [Importando Módulos en Módulos](#importando-módulos-en-módulos)
- [Interpolaciones](#interpolaciones)
    - [Cómo se escriben](#cómo-se-escriben)
    - [Operaciones básicas con JS](#operaciones-básicas-con-js)
    - [Mostrar datos desde TypeScript](#mostrar-datos-desde-typescript)
    - [Mostrar datos y hacer operaciones](#mostrar-datos-y-hacer-operaciones)
    - [Mostrando objetos de TypeScript](#mostrando-objetos-de-typescript)
    - [Interpolación de atributos](#interpolación-de-atributos)
    - [Chaining Operator / Operador de Encadenamiento Opcional](#chaining-operator--operador-de-encadenamiento-opcional)
- [Directivas](#directivas)
    - [Sintáxis de una directiva](#sintáxis-de-una-directiva)
    - [Directiva *ngFor](#directiva-ngfor)
    - [Directiva *ngIf](#directiva-ngif)
      - [Directiva <ng-template> (Próximamente)](#directiva-ng-template-próximamente)
      - [Directiva <ng-container> (Próximamente)](#directiva-ng-container-próximamente)
    - [Directiva [ngStyle]](#directiva-ngstyle)
    - [Directiva [ngClass]](#directiva-ngclass)
    - [Directiva [ngSwitch]](#directiva-ngswitch)
    - [Directiva [ngModel]](#directiva-ngmodel)
- [Eventos / Event Binding](#eventos--event-binding)
      - [HostListener](#hostlistener)
- [Decoradores @Input/@Output](#decoradores-inputoutput)
  - [Decorador @Input](#decorador-input)
    - [Ciclo de vida: ngOnChanges](#ciclo-de-vida-ngonchanges)
  - [Decorador @Output](#decorador-output)
- [Routing](#routing)
    - [Routing básico](#routing-básico)
  - [Routing con Children con Lazy Load](#routing-con-children-con-lazy-load)
  - [Routing con parámetros](#routing-con-parámetros)
  - [Navegación desde TypeScript](#navegación-desde-typescript)
  - [ExtraOptions en RouterModule](#extraoptions-en-routermodule)
- [Servicios](#servicios)
  - [Crear un servicio](#crear-un-servicio)
  - [Declarando un servicio](#declarando-un-servicio)
- [Formularios](#formularios)
  - [Estados de una validación](#estados-de-una-validación)
  - [Tipos de formularios](#tipos-de-formularios)
  - [Formularios Normales](#formularios-normales)
    - [¿Cómo se valida?](#cómo-se-valida)
    - [Acceder a los estados de validación](#acceder-a-los-estados-de-validación)
  - [Formularios Reactivos](#formularios-reactivos)
      - [¿Cómo se configura?](#cómo-se-configura)
      - [Validación en TypeScript](#validación-en-typescript)
      - [Acceder a los estados de validación](#acceder-a-los-estados-de-validación-1)
- [Pipes](#pipes)
  - [¿Qué es un Pipe?](#qué-es-un-pipe)
  - [Cómo se usa](#cómo-se-usa)
  - [Tipos de Pipes](#tipos-de-pipes)
  - [Custom Pipes](#custom-pipes)
    - [Estructura de un Custom Pipe](#estructura-de-un-custom-pipe)
    - [Usando un Custom Pipe](#usando-un-custom-pipe)
- [Peticiones HTTP](#peticiones-http)
  - [Métodos HTTP](#métodos-http)
  - [HttpHeaders y HttpParams](#httpheaders-y-httpparams)
    - [HttpHeaders](#httpheaders)
    - [HttpParams](#httpparams)
  - [Importación en el módulo](#importación-en-el-módulo)
  - [Importación en un componente (No recomendado)](#importación-en-un-componente-no-recomendado)
  - [Importación en el servicio (Recomendado)](#importación-en-el-servicio-recomendado)
  - [RxJS(Observables) (Próximamente)](#rxjsobservables-próximamente)
- [Deploy](#deploy)
  - [Configurando el Entorno](#configurando-el-entorno)
    - [¿Qué es el archivo `.environment.ts`?](#qué-es-el-archivo-environmentts)
  - [Configurando compatibilidad (Próximamente)](#configurando-compatibilidad-próximamente)
  - [Configurando tamaño de los archivos (Próximamente)](#configurando-tamaño-de-los-archivos-próximamente)
  - [Configurando el cache (Próximamente)](#configurando-el-cache-próximamente)
- [Consejos básicos](#consejos-básicos)
- [Errores comunes](#errores-comunes)
- [Herramientas / Plugins](#herramientas--plugins)
- [Ejercicios](#ejercicios)
  - [Ejercicio Thefork](#ejercicio-thefork)
    - [Páginas](#páginas)
    - [Componentes](#componentes)
    - [Enlaces del footer](#enlaces-del-footer)
  
# Información sobre Angular

### Versiones:
- Versión 1: AngularJS (Librería)
- Versión a partir de la 2: Angular (Framework)

### Ecosistema de Angular
Es un framework, es una combinación de diferentes tecnologías:

- AngularJS
- ExpressJS
- TypeScript
- Karma / Jasmine

### Trabajando con Angular
Mediante Angular CLI, es decir que vamos a trabajar a través de la consola yn el navegador podemos instalar [Angular Dev Tools](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh).


# Angular CLI

Es poder usar la palabra ```ng``` dentro de la terminal para ejecutar acciones de Angular como: crear apps, componentes, servicios, lanzar el servidor...

### Instalar CLI

Para instalar el el CLI debemos de tener en cuenta:

Miramos en la web oficial: 

```bash
# ✅ Instalar Angular CLI
npm i @angular/cli -g
npm i @angular/cli --global
npm install @angular/cli -g
npm install @angular/cli --global

# ❗️ Mac (Si algo falla)
1. sudo npm i @angular/cli -g
2. Escribir vuestra contraseña
# Meter la contraseña (visualmente no ocurre nada)
# Pulsamos Intro

# ❗️ Windows (Si algo falla)
Ejecutar PowerShell en modo administrador, haciendo click derecho sobre el icono de PowerShell.
```

### Lista de comandos
Existen muchos comandos para usar con Angular CLI, aquí os dejo algunos de ellos:

```bash
ng                            # Comando básico
ng new nombre-app             # Crear una app
ng serve                      # Iniciar el servidor la app
ng generate component nombre	# Genera un componente
ng generate directive nombre	# Genera una directiva
ng generate pipe nombre   		# Genera un pipe
ng generate route nombre			# Genera una ruta
ng generate service nombre		# Genera un servicio
```
También existen los comandos shorthand:

```bash
ng n nombre		    # Crear una app
ng s              # Iniciar el servidor la app
ng g c nombre	    # Genera un componente
ng g d nombre	    # Genera una directiva
ng g p nombre	    # Genera un pipe
ng g r nombre		  # Genera una ruta
ng g s nombre		  # Genera un servicio
```

**En resumen, los pasos para comenzar a trabajar**

Comenzamos creando la base de nuestra app y debemos de tener en cuenta que necesitamos **2 terminales** abiertas:
1. Generar la app / componentes 
2. Generar el servidor para verlo en localhost

```bash
# Creamos la app
ng n nombre-app

# Entramos en la carpeta que se acaba de crear
cd nombre-app

# Opción 1: Generamos el servidor con CLI
ng s -o
# Opción 2: Generamos el servidor con NPM
npm run start

# En el navegador abrimos la url
http://localhost:4200
```


### Comandos para trabajar

#### Comandos para: Componentes

Para generar un componente recordemos que debemos de hacer 2 pasos:
1. Crear la carpeta del componente y sus archivos 
2. Añadir el ```import {} from './carpeta'``` en el archivo ```app.module.ts```

Podemos usar Angular-CLI para generar esa estructura:

```bash
# Versión larga
ng generate componente nombreComponente
ng generate componente nombreCarpeta/nombreComponente

# Versión corta
ng g c nombreComponente
ng g c nombreCarpeta/nombreComponente


Se ejecutan varias acciones:
```bash
CREATE src/app/tercero/tercero.component.scss
CREATE src/app/tercero/tercero.component.html
CREATE src/app/tercero/tercero.component.spec.ts
CREATE src/app/tercero/tercero.component.ts
UPDATE src/app/app.module.ts
```

#### Comandos para: Módulos

```bash
# Generar un Módulo
ng generate module nombreModulo
ng g m nombreModulo
```

Dentro del decorador de un módulo existen varias partes importantes.

```bash
CREATE src/app/tercero/tercero.component.scss
CREATE src/app/tercero/tercero.component.html
CREATE src/app/tercero/tercero.component.spec.ts
CREATE src/app/tercero/tercero.component.ts
UPDATE src/app/app.module.ts
```




#### Comandos para: Deploy
Siempre podemos generar la aplicación final usando el comando `ng build`.

```bash
# Generamos la app final
ng build --configuration=production
```


# Cómo estructurar la app (Próximamente)
```bash
Visual                              Técnico (Código)
____________________________________________________
Páginas (Conjunto de componentes)   Componente
Componente (Parte de la web /app)   Componente


Arquitecturas (Atomic Design)
____________________________________________________
Átomos      (icono / texto)         Componente
Moléculas   (menú de navegación)    Componente
Organismos  (cabecera)              Componente
Plantillas  (cabecera con CSS)      Componente
Páginas     (Introducimos la info)  Componente 
```

# Archivos de configuración
La app de angular tiene una serie de archivos básicos de configuración:
* tsconfig.json (Configuración del TS)
* angular.json (Configuración de la app)
  
## angular.json
En este archivo podemos configurar la app y tiene diferentes propiedades para configurar.

**Configurar archivos SASS para mixins**
Para ello dentro del archivo `angular.json` debemos de añadir la propiedad `stylePreprocessorOptions`.

```json
{
  "projects": {
    "nombre-app": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/assets/scss"
              ]
            }
          }
        }
      }
    }
  }
}
```
> 
> ¡Cuidado! @use() aún no funciona en Angular, debemos de usar @import()


# Módulos
Los módulos nos permiten organizar de forma interna los componentes. Es decir un módulo es un conjunto de componentes para evitar tener “mil” importaciones en nuestra app.
También nos sirven para gestionar la carga de la aplicación, optimizarla y gestionar los servicios.

## Crear un módulo
```bash
ng g m components   # Creamos un módulo para components
ng g m pages        # Creamos un módulo para pages
ng g m services     # Creamos un módulo para services
```

## Añadiendo un modulo a `app.module.ts`
Cuando tengamos un módulo deberemos de importarlo al módulo `app.module.ts` (como mínimo) o a otro módulo de componentes que hayamos usado. 

Es importante que tengamos en cuenta que sí queremos usar un componente de ese módulo debemos de importarlo en el módulo principal.

```ts
import { PagesModule } from 'ruta'
import { ComponentsModule } from 'ruta'

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    PagesModule,      // 👈 Añadimos esta línea
    ComponentesModule // 👈 Añadimos esta línea
  ]
})
```

Ejemplo de importación y exportación de módulos en `pages.module.ts`.

```ts
import { ComponentsModule } from 'ruta'

@NgModule({
  imports : [ ComponentsModule ],
})
```

## Gestión de componentes

La gestión de los componentes es algo esencial en los módulos, por eso vamos a suponer que tenemos una estructura así:

- Módulo de Páginas
  - Página1
  - Página2
- Módulo de Componentes
  - Componente1
  - Componente2

Los casos serían:
1. Si quiero incluir *Componente1* en *Componente2* no tengo que hacer nada porque pertenecen al mismo módulo.
2. Si quiero incluir *Página1* en *Página2* no tengo que hacer nada porque pertenecen al mismo módulo.
3. Si quiero incluir *Componente1* en *Página1* tenemos que:
   - Añadir *Componente1* a exports dentro del *Módulo de Componentes*
   - Añadir el *Módulo de Componentes* a imports dentro del Módulo de Páginas

### Declarando componentes
Si vamos a importar un componente dentro de un módulo lo añadiremos dentro de `declarations` en el `module.ts`.

```ts
import { Componente } from 'ruta'

@NgModule({
  declarations : [ Componente ]
})
```

### Exportando componentes
Si queremos exportar un módulo lo añadiremos dentro de `exports` en el `module.ts`.

```ts
import { Componente } from 'ruta'

@NgModule({
  declarations : [ Componente ],
  exports      : [ Componente ]
})
```

### Importando Módulos en Módulos
Retomando el ejemplo de antes: para poder incluir en cualquier página dentro de `pages.module.ts` el `Componente1` debemos de añadir a `declarations` en el `components.module.ts`.

```ts
/* Estamos en components.module.ts */
import { Componente1 } from 'ruta'

@NgModule({
  declarations : [ Componente1 ],
  exports      : [ Componente1 ],
})
```

Después en el `pages.module.ts` debemos de añadir a `imports` en el `pages.module.ts` el `components.module.ts`.

```ts
/* Estamos en pages.module.ts */
import { ComponentsModule } from 'ruta'

@NgModule({
  imports : [ ComponentsModule ],
})
```

# Interpolaciones
Las interpolaciones son como Template Literals que nos permiten mostrar datos en HTML tanto de Javascript como de TypeScript.
Cuando usamos las interpolaciones dentro del HTML de un componente de Angular tenemos varias opciones:

### Cómo se escriben

```html
<!-- Teoría -->
{{ expresion }} 
{{ propiedad }} <!-- Nos permite mostrar el valor de la propiedad -->
{{ metodo() }}  <!-- Nos permite mostrar el return de un método   -->

<!-- Ejemplos reales -->
<p>{{ foto }}</p>
<p>{{ alumno.nombre }}</p>
<p>{{ semana[0] }}</p>

```

### Operaciones básicas con JS

Podemos escribir operaciones básicas de Javascript dentro de una interpolación.

```html
{{ 1 + 1 }}
{{ "hola" + "adios" }}
{{ "hola" + 4 + "adios" }}
```

### Mostrar datos desde TypeScript

Si tenemos las propiedades definidas dentro del `component.ts` podemos mostrarlas también.

```html
{{ nombre }}
{{ edad }}
{{ meQuiere }}
{{ !meQuiere }}
{{ meQuiere ? 'si' : 'no' }}
{{ semana }}
```

### Mostrar datos y hacer operaciones

También podemos combinar el uso de operaciones con propiedades ya definidas.

```html
{{ edad + 50 }}
```

### Mostrando objetos de TypeScript

En el caso de los objetos es importante que tengamos en cuenta que se muestran las _propiedades_ de los objetos o el return de los _métodos_ definidos en TypeScript.

```html
{{ alumna }} 
{{ clase }}
{{ alumna.nombre }}
{{ clase.nombre }}
{{ alumna['nombre'] }}
{{ clase[0]['nombre'] }}
```

### Interpolación de atributos
También podemos y **debemos** interpolar los atributos de una etiqueta que recibe información desde TypeScript.
Podremos también usar propiedades del DOM de Javascript en las etiquetas.

```html
<img src="{{ rutaImagen }}"> <!-- Puede dar un error -->
<img [src]="rutaImagen">     <!-- No dará error -->
<p [innerHTML]>Texto</p>     <!-- Ejemplo de inteporlación de atributo -->
```

### Chaining Operator / Operador de Encadenamiento Opcional

Cuando usamos el operador de `?` nos permite 'evitar' la validación estricta de una variable o de la propiedad de un objeto.

```html
<p>{{ alumna? }}<p>
<p>{{ clase? }}<p>
<p>{{ alumna?.nombre }}<p>
<p>{{ clase?.nombre }}<p>
```

# Directivas

Una directiva es un atributo propio de Angular que nos permite ejecutar funciones y existen varios tipos.

### Sintáxis de una directiva

Habitualmente las directivas se escriben como 'atributos' en el html y éstas suelen tener varios caracteres especiales, éstos caracteres son:

* {{ }} Interpolaciones
* []    Directiva Binding
* ()    Eventos
* [()]  Directiva Two-way Binding
* #     Declaración de variables (ID de Angular)
* *     Directivas Estructurales 

**Lista de directivas**

1. Directivas Estructurales
- *ngFor 
- *ngIf 
- *ngSwitch 
- *ngSwitchCase 
- *ngSwitchDefault 
- *ngForOf 
- *ngForTrackBy 
- *ngTemplate 
- *ngTemplateOutlet 
- *ngTemplateOutletContext 

2. Directivas de estilo (Binding)
- [ngStyle]
- [ngClass]


3. Directivas de Eventos
- (click)
- (mouseover), (mouseout), (mousemove), (scroll), (wheel)
- (submit)
- (keydown), (keyup), (keypress)
- (focus), (blur), (focusin), (focusout)
- (change), (reset)
- (drag), (dragstart), (dragend), (dragover), (dragenter), (dragleave), (drop)
- (copy), (cut), (select), (paste)

4. Directivas para Two-Data-Binding
- [(ngModel)]
- [(ngModelChange)]

### Directiva *ngFor

La directiva ngFor nos permite recorrer un array y crear una etiqueta por cada elemento iterable de un array.

```html
<!-- Teoría -->
<div *ngFor=" let variable of array "></div>

<!-- Podremos usar cadaItem para mostrar el valor del array  -->
<div *ngFor=" let cadaItem of array ">
	{{ cadaItem }}
</div>

```
También podemos aplicar un `pipe` por ejemplo para filtrar la información que muestra el `*ngFor`

```html
<!-- Podemos aplicar filtros -->
<ul>
  <li *ngFor="let cadaItem of array | pipe:valor"></li>
</ul>

<!-- Podemos aplicar límites de X hasta Y -->
<ul>
  <li *ngFor="let cadaItem of array | slice:1:5"></li>
</ul>

<!-- Podemos aplicar límites y con la posición -->
<ul>
  <li *ngFor="let cadaItem of array | slice:1:5; let i = index"></li>
</ul>
```

**Pipe 'keyvalue' para objetos**

```html
<!-- Teoría -->
<div *ngFor=" let variable of object | keyvalue "></div>

<!-- Podremos usar el key y el value del objeto  -->
<div *ngFor="let cadaItem of objeto | keyvalue">
	{{ cadaItem.key }}  {{ cadaItem.value }}
</div>

<!-- Recorrer un array dentro de un objeto -->
<div *ngFor="let nuevoItem of objeto[cadaItem.key]"></div>
```

### Directiva *ngIf

La directiva ngIf nos permite mostrar u ocultar un elemento de HTMl en base a una condición.

Si la condición es `true` la etiqueta se muestra, si es `false` la etiqueta no se muestra.

```html
<!-- Teoría -->
<div *ngIf=" condicion "></div>
<div *ngIf=" condicion1 && condicion2 "></div>
<div *ngIf=" condicion1 || condicion2 "></div>

<!-- Ejemplo con booleanos -->
<div *ngIf=" true   ">Se muestra</div>
<div *ngIf=" !true  ">NO se muestra</div>
<div *ngIf=" false  ">NO se muestra</div>
<div *ngIf=" !false ">Si se muestra</div>

<!-- Ejemplo: El div sólo se muestra si la edad es mayor o igual a 18 -->
<div *ngIf=" edad >= 18 "></div>
```

También se puede aplicar propiedades definidos en TypeScript:

```ts
class Componente {
  public palabra: string = "suscribete";
  public condicion: boolean = false;
}
```

```html
<div *ngIf=" palabra === 'suscribete' ">
  Se muestra si palabra vale 'suscríbete'
</div>
<div *ngIf=" condicion ">
  Se muestra si el booleano es true
</div>
```

También se puede aplicar métodos definidos en TypeScript que devuelvan un string:

```ts
class Componente {
  public palabra(): string {
    return "suscribete";
  }
  public condicion(): boolean {
    return false;
  }
}
```

```html
<div *ngIf=" palabra() === 'suscribete' ">Se muestra si palabra vale 'suscríbete'</div>
<div *ngIf=" condicion() ">Se muestra si el booleano es true</div>
```

Aunque lo habitual es que la lógica se encuentre dentro de la condición:

```ts
class Componente {
  public palabra(): boolean {
    return valor === "suscribete";
  }
  public condicion(): boolean {
    return false;
  }
}
```

```html
<div *ngIf=" palabra()   ">Se muestra si palabra devuelve true</div>
<div *ngIf=" condicion() ">Se muestra si condición devuelve true</div>
```

#### Directiva <ng-template> (Próximamente)
La directiva <ng-template> nos permite crear una plantilla HTML que podremos reutilizar en otras partes de la aplicación.

```html
<!-- Definimos la condición -->
<div *ngIf="condicion; then verdadero else falso"></div>

<!-- Definimos lo que se muestra según el resultado  -->
<ng-template #verdadero> Se muestra si es verdadero </ng-template>
<ng-template #falso> Se muestra si es falto </ng-template>
```

#### Directiva <ng-container> (Próximamente)
La directiva <ng-container> nos permite mostrar una etiqueta HTML que contiene una condición.

```html
<!-- Definimos la condición -->
<div *ngIf="condicion; then verdadero else falso"></div>

<!-- Definimos lo que se muestra según el resultado  -->
<ng-template #verdadero> Se muestra si es verdadero </ng-template>
<ng-template #falso> Se muestra si es falto </ng-template>
```

### Directiva [ngStyle]

La directiva `[ngStyle]` nos permite aplicar propiedades de CSS directamente a una etiqueta. Esta propiedad se puede combinar con métodos que tengan return y con propiedades de TypeScript.

```html
<!-- Sintáxis con una propiedad -->
<div [ngStyle]="{ 'propiedad' : 'valor' }"></div>

<!-- Sintáxis con múltiples propiedades -->
<div [ngStyle]="{ 'propiedad' : 'valor' , 'propiedad' : 'valor' }"></div>

<!-- Normalmente se tabula de esta forma -->
<div [ngStyle]="{ 
    'propiedad' : 'valor' ,
    'propiedad' : 'valor'
    }"
></div>
```

Es importante comprender que el nombre de la propiedad de CSS se puede escribir de 2 formas:

- Usando comillas si la escribimos como en CSS `background-color`
- Usando su forma en Javascript con _camelCase_ `backgroundColor`

```html
<!-- Sintáxis CSS -->
<div [ngStyle]="{ 
    'width' : '100%' ,
    'background-color' : 'red' }"
></div>

<!-- Sintáxis Javascript -->
<div [ngStyle]="{ 
    width : '100%' ,
    backgroundColor : 'red' }"
></div>
```

También se puede aplicar propiedades definidos en TypeScript:

```ts
class Componente {
  public ancho: string = "100%";
  public bgColor: string = "red";
}
```

```html
<div [ngStyle]="{ 
    width           : ancho ,
    backgroundColor : bgColor }"
></div>
```

También se puede aplicar métodos definidos en TypeScript que devuelvan un string:

```ts
class Componente {
  public ancho(): string {
    return "100%";
  }
  public bgColor(): string {
    return "red";
  }
}
```

```html
<div [ngStyle]="{ 
    width           : ancho() ,
    backgroundColor : bgColor() }"
></div>
```

**Caso especial: transform** Cuando hablamos del transform, vamos a devolver un `Template String` o `Template Literal`

```ts
class Componente {
  public rotacion : number = 45;
  public mover    : number = 75;
  public escala   : number = 2;

  public simple(): string {
    return `rotate(${rotacion}deg)`;
  }
  public multiple(): string {
    return `rotate(${rotacion}deg) translateX(${mover}%) scale(${escala}deg)`;
  }
}
```

```html
<div [ngStyle]="{  transform : simple() }"></div>
<div [ngStyle]="{  transform : multiple() }"></div>
```

### Directiva [ngClass]

La directiva `[ngClass]` nos permite aplicar clases a una etiqueta si se cumple una condición. Esta condición puede venir desde métodos que tengan return o con propiedades de TypeScript.

```html
<!-- Teoría -->
<div [ngClass]=" { 'clase'  : condicion } "></div>
<div [ngClass]=" { 'clase1' : condicion , 'clase2' : condicion } "></div>

<!-- La condición puede ser una propiedad o un método -->
<div [ngClass]=" { 'clase'  : propiedad } "></div>
<div [ngClass]=" { 'clase'  : metodo()  } "></div> 

<!-- Realidad -->
<div [ngClass]=" { 'circulo' : posicion == 0 } "></div>
<p   [ngClass]=" { 'rojo'    : ver == true   } "></p>
<p   [ngClass]=" { 'rojo'    : ver == true , 'azul' : ver == false } "></p>
```

**Otras sintáxis que ha tenido class**

```html
<!-- Clase en la directiva  -->
<div [class.clase1]=" posicion == 0 "></div>

<!-- Clase como objeto  -->
<div [ngClass]="{'clase': posicion == 0}"></div>

<!-- Clase como objeto  -->
<div [ngClass]="{ 1:'clase1',2:'clase2'}[posicion]"></div>

<!-- Clase if shorthand  -->
<div [ngClass]="( posicion==0 )?'clase1':'clase2'" ></div>

```

### Directiva [ngSwitch]
Necesitaremos primero indicar `[ngSwitch]=“valor”` y las etiquetas hijas tendrán `*ngSwitchCase = “valor”`.

```html
<!-- Teoría -->
<div [ngSwitch]=" variable ">
	<div *ngSwitchCase=" valor1 "></div>
	<div *ngSwitchCase=" valor2 "></div>
	<div *ngSwitchCase=" valor3 "></div>
</div>
```

### Directiva [ngModel]
Es una directiva que necesita importar FormsModule from @angular/forms.

```html
<!-- Teoría -->
<input [(ngModel)]=" propiedad ">
```


# Eventos / Event Binding

En Angular podemos asignar eventos y que éstos ejecuten métodos definidos en TypeScript.

En el TypeScript tenemos definido métodos que van a ejecutarse:

```ts
class Componente{
  public metodo() : void  {}
  public metodo1() : void  {}
  public metodo2( param : any ) : void  {}
  public metodo3( param1 : any , param2 : any ) : void  {}
}
```

Y en el HTML asociamos un método a un evento:

```html
<!-- Teoría -->
<button (click)=" metodo1() ">Botón</button>
<button (click)=" metodo2( 'valor' ) ">Botón</button>
<button (click)=" metodo3( 'valor1' , 'valor1' ) ">Botón</button>
```

Existen múltiples tipos de eventos:

```html
<button (click)      =" metodo() ">Botón</button>
<button (mouseover)  =" metodo() ">Botón</button>
<button (mouseout)   =" metodo() ">Botón</button>
<button (mouseenter) =" metodo() ">Botón</button>
<button (mouseleave) =" metodo() ">Botón</button>
<button (mousemove)  =" metodo() ">Botón</button>
<form   (submit)     =" metodo() ">Botón</form>
```

También podemos conocer el valor del objeto evento que se emite al ejecutar un método.

```ts
class Componente{
  public metodo( $event : Event ) : void  {
    console.log( $event )
  }
}
```
```html
<button (mousemove)=" metodo( $event ) ">Botón</button>
```

#### HostListener

Aunque la mejor forma de hacerlo es mediante un `HostListener`.
Un `HostListener` es un decorador que añadimos **antes** de un método.

```ts
class Componente{
  
  @HostListener('mousemove', ['$event'])
  public metodo( e ) : void  {
    console.log( e )
  }
}
```

```html
<button (mousemove)=" metodo() ">Botón</button>
```

También podemos asociar un HostListener al objeto window o document.
```ts
class Componente{
  
  @HostListener('document:mousemove', ['$event'])
  public metodo1( e ) : void  { }
  
  @HostListener('window:scroll', ['$event'])
  public metodo2( e ) : void  { }
}
```


# Decoradores @Input/@Output
Los decoradores de `@Input` y `@Output` nos permiten definir propiedades de entrada y salida de datos de un componente a otro.
  
```ts
@Input() public propiedad : any;
@Output() public evento : EventEmitter<any> = new EventEmitter();
```

## Decorador @Input
Nos permite definir una propiedad de entrada a un componente.

En el TypeScript definimos:
```ts
// Importamos el uso de Input
import { Input } from '@angular/core'

// Dentro del objeto, configuramos una propiedad como Input()
class Component {
	@Input() nombrePropiedad : any = undefined
}
```

Y en el HTML del componente contenedor definimos:
```html
<app-componente [nombrePropiedad]=" 'valor'   "></app-componente>
<app-componente [nombrePropiedad]=" propiedad "></app-componente>
<app-componente [nombrePropiedad]=" metodo()  "></app-componente> <!-- Debe de tener return -->
```

### Ciclo de vida: ngOnChanges
Si queremos captar cuando un @iInput cambia de valor entonces debemos de usar el ciclo de vida: ngOnChanges.

```ts
import { Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre! : string;

  constructor(){}

  ngOnChanges( nombreCambia : SimpleChanges): void {
    console.log( nombreCambia )
  }
  ngOnInit(): void {}
}

```

## Decorador @Output
Los componentes puedes enviar información como un método.

En el TypeScript del componente hijo definimos:
```ts
// Importamos Output y EventEmitter
import { Output, EventEmitter } from '@angular/core';

export class Componente implements OnInit {
  // Definimos una propiedad que emita un Evento
  @Output() busqueda = new EventEmitter<any>()
 
  // Definimos un método que emitirá el valor
  enviarDato(){
    this.busqueda.emit( 'dato emitido' )
  }	
}
```

En el TypeScript del componente **contenedor** definimos:
```ts
// Preparamos una propiedad para guardar el dato que emite el hijo
export class AppComponent implements OnInit{
  valorDesdeElHijo : any 
	
  // Este método recibe el dato del hijo y lo guarda en valorDesdeElHijo
  recibirValorHijo( e ){
    this.valorDesdeElHijo = e 
  }
}
```

Y en el HTML del componente contenedor definimos:
```html
<!-- Cuando búsqueda cambia se ejecuta el método recibirValorHijo() -->
<!-- $event es el valor que se emite del hijo -->
<app-componente (busqueda)=" recibirValorHijo( $event )" ></app-componente>

<!-- Aquí mostramps el valor ya recibido -->
<h2>{{ valorDesdeElHijo }}</h2>
```


# Routing

Nos permite generar url y que Angular cargue un componente por cada ruta.
Para ello tendremos dos elementos a los que debemos de mirar:
* El archivo `app.routing.module`
* La etiqueta `<router-outlet></router-outlet>` en el HTML


### Routing básico
Dentro del archivo `app.routing.module` tendremos una constante llamada `routes` que contendrá todas las rutas que vamos a definir.

Tienen una sintáxis fácil:
```ts
const routes: Routes = [
  { path : 'url' , component : NombreComponente },
]
```

Un ejemplo sería:
```ts
const routes: Routes = [
  { path : 'home'  , component : HomeComponent },
  { path : 'work'  , component : WorkComponent },
  { path : 'about' , redirectTo : 'work'       },      /* Nos permite redirigir una ruta a otra diferente */  
  { path: '', redirectTo: 'home', pathMatch: 'full' }, /* Nos permite redirigir a la home */
  { path: '**'     , component: ErrorComponent },      /* Cualquier ruta que no esté definida */
]
```

Y para poder usar esas rutas en el HTML necesitaremos usar la directiva `[routerLink]`:
```html
<ul>
    <li><a [routerLink]=" ['/'] ">Inicio</a></li>
    <li><a [routerLink]=" ['/trabajos'] ">Trabajos</a></li>
    <li><a [routerLink]=" ['/contacto'] ">Contacto</a></li>
</ul>
```
## Routing con Children con Lazy Load
Podemos organizar nuestras rutas y prepararlas para lazy loading.

Debemos primero:
* Tener el `app-routing.module.ts`
* Crear 2 módulos `trabajos.module.ts` y `trabajos-routing.module.ts`
  * En el módulo `trabajos-routing.module.ts` debemos **exportarlo**
  * En el módulo `trabajos.module.ts` debemos importar el módulo `trabajos-routing.module.ts`

En el `trabajos-routing.module.ts` tendremos las rutas de nuestras páginas:

```ts
const routes: Routes = [
  {
    path      : 'trabajos',
    component : TrabajosComponent,
    children  : [
      { path  : 'ux'  , component  : UxComponent  },
      { path  : 'ui'  , component  : UiComponent  },
      { path  : 'web' , component  : WebComponent },
      { path  : '**'  , redirectTo : 'ux' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // 👈  Lo añadimos aquí
})
```

En el `trabajos.module.ts` importaremos el módulo `pages-routing.module.ts`:

```ts
@NgModule({
  declarations: [ UxComponent, UiComponent, WebComponent ],
  imports: [
    CommonModule,
    TrabajosRoutingModule, // 👈  Lo añadimos aquí
  ] 
})
```

Y en el `app-routing.module.ts` configuramos la ruta de nuestro módulo `trabajos.module.ts`:

```ts
const routes: Routes = [
  {
    path : 'inicio', loadChildren : () => import('./pages/trabajos.module').then(m => m.TrabajosModule)
  }
]
```

Y para navegar debemos de usar `routerLink`:
```html
<a [routerLink]="['/trabajos/ux']">ux</a>
<a [routerLink]="['/trabajos/ix']">ui</a>
<a [routerLink]="['/trabajos/web']">web</a>
```

Para mostrar esos componentes `children` debemos de añadir dentro del `trabajos.component.ts`:
```html
<router-outlet></router-outlet>
```

## Routing con parámetros

Cuando hablamos de parámetros nos encontramos que podemos enviar información a través de la URL.
Dentro del archivo `app.routing.module` en la constante `routes` añadiremos el nombre del parámetro.
```ts
const routes: Routes = [
  { path : 'ruta/:nombreParametro' , component : Componente }
];
```

Y para poder usarlo en el componente que cargue necesitamos:

```ts
// Paso 1: Importamos ActivatedRoute
import { ActivatedRoute } from '@angular/router';

export class Componente implements OnInit {

  nombre : string = ''

  // Paso 2: Lo añadimos a nuestro objeto
  constructor( private activatedRoute : ActivatedRoute ) { }

  // Paso 3: Recogemos los datos de la ruta
  ngOnInit(): void {
    /* Aquí desestructuramos y recibimos el valor */
    this.activatedRoute.params.subscribe( ( { nombre } ) =>  this.nombre = nombre )

    /* Si no desestructuramos y recibimos un objeto */
   // this.info = this.rutas.params.subscribe( ( {nombre} )=> nombre )
  }
}
```

**Pasos para definir una ruta con parámetros**
1. Añadir la ruta al archivo `app-routing.module.ts` con el parámetro
2. En el componente que se carga en esa ruta, importar `ActivatedRoute`
3. Recibir ese dato en el método `ngOnInit()`
4. Depende de la página, ejecutaremos un find, filter, etc.

## Navegación desde TypeScript

También podemos hacer la navegación desde el propio TypeScript, para ello lo que debemos de en el html es:

```html
<!-- Aquí no recibimos un valor -->
<a (click)="href()"> Cargar Uno </a>
<!-- Aquí recibimos un valor -->
<a (click)="href('valor')"> Cargar Uno </a>
<!-- Aquí recibimos dos valores: la url y los datos a enviar -->
<a (click)="href('valor','Emma')"> Cargar Uno </a>
```
Y en el TypeScript del componente:

```ts
// Paso 1: Importar los módulos de Angular para funcionar
import { Router } from '@angular/router';

// Paso 2: Las definimos en el constructor
constructor( private router : Router ){}
  	
// Paso 3: Usamos ruta con la url y los parámetros
// Aquí no recibimos un valor 
href() : void {
  this.router.navigate(['/componente',{ parametro:param }])
}
// Aquí recibimos un valor 
href( param : any ) : void {
  this.router.navigate(['/componente',{ parametro:param }])
  this.router.navigate(['/componente',{ parametro:param }])
}
// Aquí recibimos dos valores: la url y los datos a enviar 
href( url : string, param : string ) : void {
  this.router.navigate([url,{ parametro:param }])
}
```

## ExtraOptions en RouterModule
Dentro del `app-routing.module.ts` añadiremos la siguiente configuración:

Por ejemplo:
- enableTracing: Sirve para ver el código que se ejecuta en la aplicación
- useHash: Sirve para que la URL acepte el uso (o no) #
- initialNavigation: Sirve para que la URL se cargue al inicio
- errorHandler: Sirve para que nos muestre un error en caso de que no se encuentre la ruta
- preloadingStrategy: Sirve para que cargue los componentes antes de que se cargue la página
- onSameUrlNavigation: Sirve para que nos muestre un error en caso de que la ruta no se cargue
- scrollPositionRestoration: Cuando cambia la URL el scroll vuelve al comienzo de la página
- anchorScrolling: Sirve para que el scroll se mueva con el componente
- scrollOffset: Configura el desplazamiento que utilizará el router al desplazarse a un elemento.
- paramsInheritanceStrategy: Define cómo el router fusiona parámetros
- malformedUriErrorHandler: Define una función que se ejecuta cuando la URL es incorrecta
- urlUpdateStrategy: Define cómo el router actualiza la URL
- relativeLinkResolution: Define cómo el router resuelve una ruta relativa
- canceledNavigationResolution: Define cómo el router resuelve una navegación cancelada
  
Aplicándolo directamente:
```ts 
[RouterModule.forRoot(routes)],                  /* Configuracion básica  */
[RouterModule.forRoot(routes, {                  /* Añadiendo las opciones */
  useHash           : true,
  enableTracing     : true,
  anchorScrolling   : true
})], 
```

También podemos guardarlo en una constante
```ts 
const config: ExtraOptions = {
  useHash           : true,
  enableTracing     : true,
  anchorScrolling   : true
}

@ngModule({
  imports: [RouterModule.forRoot(routes), config ],
  exports: [RouterModule]
})
```

# Servicios
Los servicios son clases que nos permiten crear objetos que podemos usar en cualquier componente.
Nos permiten guardar información o métodos y habitualmente se usan para:
* Cargar datos
* Hacer peticiones HTTP

## Crear un servicio
Desde la terminal con AngularCLI crearemos el servicio dentro de una carpeta llamada `services`:

```bash
# Lo creamos en la carpeta "app"
ng generate service datos
# Lo creamos en la carpeta "app"
ng g s datos
#  Lo creamos dentro de una carpeta "services"
ng generate service services/datos
#  Lo creamos dentro de una carpeta "services"
ng g s services/datos
```

## Declarando un servicio

Después lo importamos al componente en el que lo vayamos a usar y lo añadimos al constructor de la clase y lo usaremos dentro del `ngOnInit()`.

```ts
import { DatosService } from 'ruta';

class Componente implements OnInit{
  constructor( private DatosService : DatosService ) {}

  ngOnInit() : any {
    this.DatosService.getDatos()
  }
}
```

**Versiones anteriores de Angular**
Después debemos de importarlo al `app.module.ts` o al módulo de componentes al que lo queramos usarlo y añadirlo dentro del decorador `@NgModule()` en la propiedad [providers].

```ts
// Importarlo
import { DatosService } from 'ruta';

@NgModule({
  providers : [ DatosService ] // Declararlo en providers
})
```


# Formularios
El uso de formularios dentro de angular es algo esencial, por suerte es fácil.
Debemos de tener en cuenta:
* Tipos de formularios
* Validaciones

## Estados de una validación
De forma automática existen varios estados que ya están configurados al definir una `#declaración` en un Input.

* Valid: El contenido del `<input>` pasa las validaciones
* Invalid: El contenido del `<input>` NO pasa las validaciones
* Dirty: El usuario ha escrito algo dentro del `<input>`
* Pristine: El usuario NO ha escrito dentro del `<input>`
* Touched: El usuario ha hecho un CLICK en el `<input>`

## Tipos de formularios
Existen dos tipos de formularios dentro de Angular:
1. Normales (Busquedas sin mucha validación)
1. Reactivos(Cuando tenemos datos sensibles)

## Formularios Normales
1. Importar en el `app.module.ts `o en el módulo que lo requiera `FormsModule` además de añadirlo a `imports`
2. Definir una `propiedad` en el Typescript del componente
3. En un input tenemos que hacer 3 acciones:
    * Atributo `name`
    * Directiva `[(ngModel)]=" propiedad "`
    * (Validaciones) Declaración `<input #nombreDeclaracion>`

### ¿Cómo se valida?
La validación de un formulario normal se hace mediante los atributos de HTML5.

```html
	<!-- 👇 -->      <!-- 👇 -->            <!-- 👇 -->
<input name="nombre" #nombreInput="ngModel"  [(ngModel)]="nombre">

<!-- Y definimos los atributos para validarlos -->
<input type="email" required minlength="3" maxlength="3">
```

**Atributos para validación**
* pattern: Expresión regular que se debe cumplir
* required: Campo obligatorio
* minlength: Longitud mínima
* maxlength: Longitud máxima
* min: Valor mínimo
* max: Valor máximo
* type: Tipo de dato del input

### Acceder a los estados de validación
Cuando a un `<input>` le añadimos una declaración de Angular `#nombreQueSea="ngModel"`

Para ver la validación del Formulario:
```html
<p>{{ nombreFormulario.valid }}</p>
<p>{{ nombreFormulario.invalid }}</p>
<p>{{ nombreFormulario.dirty }}</p>
<p>{{ nombreFormulario.pristine }}</p>
<p>{{ nombreFormulario.touched }}</p>
```

## Formularios Reactivos
Los formularios reactivos hacen todo el trabajo desde Typescript y para ello debemos de:
1. Importar `ReactiveFormsModule` en el `app.module.ts` o en el módulo que corresponda.
2. En el HTML del componente `nombre.component.html` definimos:
   1. En el `<form>` el `[formGroup]`
   2. En los `<input>,<select>,<option>` los `formControlName`
3. En el TS del componente `nombre.component.ts`
   1. Importamos los elementos básicos de Formularios Reactivos (FormBuilder, FormGroup, Validators)
   2. Dentro del constructor importamos FormBuilder
   3. Configuramos el formulario en una propiedad de tipo FormBuilder
   
#### ¿Cómo se configura?   
En el HTML:   
```html
<!-- 1. Definimos el [formGroup]  -->
<form [formGroup]="nombreFormulario">
    <!-- 2. Definimos el [formControlName] en los input, select, textarea...  -->
    <input type="text" formControlName="nombreInput">
</form>
```

En el TypeScript:
```ts
// 1. Importamos los elementos básicos de Formularios Reactivos (FormBuilder, FormGroup, Validators)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class NombreComponente {

    // 2. Dentro del constructor importamos FormBuilder
    constructor(
        private fb : FormBuilder
    ){}

    // 3. configuramos el formulario
    formulario : FormGroup = this.fb.group({
        nombreInput : ['valor por defecto',[ /* Validadores */ ]]
    })
}
```

#### Validación en TypeScript
Para validar los elementos con formularios reactivos nos encontramos con:

```ts
formulario : FormGroup = this.fb.group({
    nombreInput : [
        'valor por defecto', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(16),
            Validators.pattern('XXXX')
    ]]
})
```
#### Acceder a los estados de validación
Para poder acceder al estado es diferente ya que se encuentran definidos en el TypeSript.

```html
<p>{{ nombreFormulario.controls['nombreInput'].valid  }}</p>
<p>{{ nombreFormulario.controls['nombreInput'].invalid  }}</p>
<p>{{ nombreFormulario.controls['nombreInput'].dirty  }}</p>
<p>{{ nombreFormulario.controls['nombreInput'].pristine  }}</p>
<p>{{ nombreFormulario.controls['nombreInput'].touched  }}</p>
```





# Pipes

## ¿Qué es un Pipe?
Nos permite "filtrar" la información. Es un método que recibe una información y devuelve otra.

## Cómo se usa
Un Pipe tiene múltiples formas de aplicarse:

```html
<!-- Sin parámetros -->
<p>{{ propiedad | nombrePipe }}</p>

<!-- Con 1 parámetro -->
<p>{{ propiedad | nombrePipe:'valor1' }}</p>

<!-- Con +1 parámetros -->
<p>{{ propiedad | nombrePipe:'valor1':'valor2' }}</p>
```

## Tipos de Pipes
Por defecto en el caso de Angular existen múltiples pipes ya creados:

- Date [Documentación Oficial](https://angular.io/api/common/DatePipe)
- Uppercase [Documentación Oficial](https://angular.io/api/common/UpperCasePipe)
- Lowercase [Documentación Oficial](https://angular.io/api/common/LowerCasePipe)
- Currency [Documentación Oficial](https://angular.io/api/common/CurrencyPipe)
- Decimal [Documentación Oficial](https://angular.io/api/common/DecimalPipe)
- Percent [Documentación Oficial](https://angular.io/api/common/PercentPipe)

**Ejemplos de cada Pipe**
```html
<!-- Nos permite formatear textos en formato fecha. -->
<p>{{ propiedad | date         }}</p>
<p>{{ propiedad | date:'short' }}</p>
<p>{{ propiedad | uppercase    }}</p>
<p>{{ propiedad | lowercase    }}</p>
<p>{{ propiedad | currency:€   }}</p>
<p>{{ propiedad | decimal:'2'  }}</p>
<p>{{ propiedad | percent:2    }}</p>
```

## Custom Pipes
Mediante Angular CLI podemos crear nuestro propio pipe gracias al comando:

```bash
# Podemos crearlo en la carpeta /app
ng g p nombrePipe

# Podemos crearlo en la carpeta que queramos
ng g p nombreCarpeta/nombrePipe 
```

**Podemos usar flags al crear pipes**
- `--spec`: Genera un test para el pipe
- `--flat`: Genera un archivo en la carpeta raíz del proyecto
- `--module`: Genera un módulo para el pipe *(Lo hacemos nosotros)*
- `--export`: Exporta el pipe *(Lo hacemos nosotros)*

### Estructura de un Custom Pipe
Un Pipe contiene un método llamado `transform()` que recibe información como el valor y un spread.

```typescript
export class NombrePipe implements PipeTransform {
  /* "value" es la información que entra */
  /* "args" recibe los parámetros (REST) */
  transform(value: any, ...args: unknown[]): unknown {
    /* Deconstruir los parámetros */
    let [] = args
    /* Es la información que devuelve el Pipe */
    return value
  }
}
```

Y en el HTML:

```html
<!-- Sin parámetros -->
<p>{{ propiedad | nombrePipe }}</p>
<p *ngFor="let item of array">{{ item | nombrePipe }}</p>
<p *ngFor="let item of array | nombrePipe ">{{ item }}</p>

<!-- Con 1 parámetro -->
<p>{{ propiedad | nombrePipe:'valor1' }}</p>
<p *ngFor="let item of array">{{ item | nombrePipe:'valor1' }}</p>
<p *ngFor="let item of array | nombrePipe:'valor1' ">{{ item }}</p>

<!-- Con +1 parámetros -->
<p>{{ propiedad | nombrePipe:'valor1':'valor2' }}</p>
<p *ngFor="let item of array">{{ item | nombrePipe:'valor1':'valor2' }}</p>
<p *ngFor="let item of array | nombrePipe:'valor1':'valor2' ">{{ item }}</p>
```

**Ejemplo de uso de un Custom Pipe**

En el TypeScript del componente:
```ts
class Componente { clase : any = [{ nombre : 'Timmy'},{ nombre : 'Emma'}]}
```

En el HTML:
```html
<p *ngFor="let cadaAlumno of clase">{{ cadaAlumno | nombrePipe:"Timmy" }}</p>
```

En el TypeScript del pipe:
```ts
export class nombrePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [ nombre ] = args
    let buscar = value.filter( ( alumno : any ) => {
      return alumno.nombre.toLowerCase().includes( nombre.toLowerCase() );
    })
    return buscar;
  }
}
```

**En las versiones anteriores de Angular**
Se añade a declarations dentro del module.ts
```ts
@NgModule({
  declarations: [  
	  NombrePipe // 👈 Aquí
  ],
  imports   : [],
  providers : [],
  bootstrap : [AppComponent]
})
```

### Usando un Custom Pipe
Un Pipe contiene un método llamado `transform()` que recibe información como el valor y un spread.

```html
{{ propiedad | nombrePipe:valor:valor }}
```


# Peticiones HTTP
En Angular podemos hacer peticiones de tipo HTTP con sus diferentes métodos:
- GET
- POST
- PUT
- DELETE

Los pasos para poder hacer peticiones en Angular son:

Para poder hacer llamadas HTTP debemos de:
1. Importar `HttpClientModule` al `app.module.ts` o módulo al que pertenezca el componente
2. En el Componente importamos `HttpClient`
3. En el `constructor` del `class` lo añadimos
4. Lo usamos dentro de `ngOnInit`

## Métodos HTTP
Cuando hacemos una petición desde Angular podemos usar varios métodos.

```ts
/* Simple */
this.http.get ( 'url' )

/* POST */
this.http.post( 'url' , body , options )

/* PUT */
this.http.put ( 'url' , body , options )

/* DELETE */
this.http.delete( 'url/valor')
this.http.delete( 'url' , options )
```


## HttpHeaders y HttpParams
Cuando hacemos una petición podemos enviar información extra de esa petición con los HttpHeaders y HttpParams.

* HttpHeaders: Son metadatos con respecto a la petición
* HttpParams: Son datos o la información 

Aquí un ejemplo de ambos y su sintáxis:

```ts
/* GET */
const options = {
    headers : new HttpHeaders({ 'nombre' : 'valor' }),
    params  : new HttpParams({ 'nombre' : 'valor' })
}
this.http.get ( 'url'  , options )
```


### HttpHeaders

```ts
/* Objeto */
const headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-type'               : 'application/json'
})
    
/* append */
const headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin','*')
    headers.append('Content-type','application/json')
    
/* set */
const headers = new HttpHeaders()
    headers.set('Access-Control-Allow-Origin','*')
    headers.set('Content-type','application/json')
```
### HttpParams

```ts
/* Enviando un Objeto */
const params = new HttpParams( {'id': '0'} )

/* Usando .set() */
const params = new HttpParams()
      params.set('id','0') 

/* Usando .append() */
const params = new HttpParams()
      params.append('id','0')
```


## Importación en el módulo

En el `app.module.ts`:

```ts
// 1. Importamos el módulo de HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// 2. Dentro del decorador en imports lo añadimos 
@NgModule({
  imports : [ HttpClientModule ]
})
```

## Importación en un componente (No recomendado)

En el `.component.ts` o  `.service.ts`

```typescript
// Importar los métodos de Angular/common/http
import { HttpClient } from '@angular/common/http';

// Dentro del componente hay que hacer 3 pasos
class Component{
  	// Definimos el tipado y un valor base (¡Muy importante!)
  	propiedad : any = {}

    // Importamos en el contrstuctor
	constructor( private http : HttpClient ){
      
    	// Opción 1: Guardamos la respuesta en la propiedad definida  
	    http.get<any>('url')
    	  .subscribe(data => { this.propiedad = data }) 
	}
  // Opción 2: Lo hacemos en el método `ngOnInit`
  ngOnInit() : void {
    this.http.get<any>('url')
    	  .subscribe(data => { this.propiedad = data }) 
  }
}
```

## Importación en el servicio (Recomendado)

Lo ideal es guardarlo dentro de un `.service.ts` y que el `.component.ts` haga la llamada a ese servicio.

## RxJS(Observables) (Próximamente)

Utilizamos la libreria `RxJS`. Un Observable es una promesa a la que va a estar atenta Angular para recibir datos de forma dinámica.

```ts
class Componente{
  constructor(
    private httpClient : HttpClient
  ) {}

  getPosts() : Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
```

# Deploy

## Configurando el Entorno

Vienen por defecto en toda app de Angular y nos permiten configurar variables globales.
Y existen 2 archivos:

* environment.prod.ts Son las claves para la app ya publicada
* environment.ts Son las claves para la app en desarrollo

### ¿Qué es el archivo `.environment.ts`?
```ts
export const environment = {
  production: false,
  url       : 'http://localhost:5000/'
}
```

Y para poder usarlo debemos en el componente / servicio que necesitmos importar la constante.

```ts
import { environment } from './../environments/environment'
```

Es decir: Cuando trabajamos en local se usará `environment.ts` pero al hacer deploy `ng build --configuration production` Angular reemplazará ese archivo por el contenido de `environment.prod.ts`

Es importante que si queremos aplicar esta configuración al hacer el deploy de una app debemos de añadir `ng build --configuration production` al `package.json` para que al hacer autodeploy de un servicio PaaS se sustituya el archivo `.environment.ts`.


```bash
# Opción por defecto
ng build

# Opiones de producción
ng build --configuration production
ng build --configuration=production
```

## Configurando compatibilidad (Próximamente)
## Configurando tamaño de los archivos (Próximamente)
## Configurando el cache (Próximamente)

# Consejos básicos
  
**Lee:** Lee, traduce y comprende siempre los mensajes. No leas la mitad del mensaje.
**Compara:** Si siempre pones las propiedades en el mismo orden, compara una línea con otra ya escrita que funcione correctamente.

# Errores comunes

```bash
"EACCESS"
```

**Solución:** Utilizar el comando `sudo` en la terminal

```bash
"git" no se reconoce como un comando...
```

**Solución:** Instalar [GIT](https://gitforwindows.org/) para Windows

```bash
Uncaught SyntaxError: Cannot use import statement outside a module
```

**Solución:** Estás intentando generar un componente dentro de otro componente. Seguramente debas de hacer un `cd ..` para salir de la carpeta del componente.

```bash
ERROR in HostResourceResolver: could not resolve XXX in context of XXXX)
```

**Solución:** Has movido / cambiado el nombre a un archivo o carpeta y tienes que actualizar las importaciones en `app.module.ts`.

**Solución 2:** Intenta comenzar de nuevo porque tardarás mucho tiempo en reorganizar los archivos y carpetas.

```bash
"Could not find NgModule. Use the skip import option to skip importing in NgModule."
```

**Solución:** En la consola debes de estar en la carpeta de `nombre-app`, no dentro de `src` ni de `app`. Haz `cd ..` y vuelve a probar.

```bash
"/ Generating Bundle..."
```

**Solución:** Si se te ha quedado como "parado" entonces dale una vez a `Ctrl + C` y si sigue bloqueado. Dale varias veces a `Ctrl + C` e inicia el servidor de nuevo.

```bash
"No space left on device write"
```

**Solución:** Tu disco duro está lleno de 💩, ¡limpialo!

```bash
"Property 'XXX' does not exist on type 'XXXComponent'. Did you mean 'YYY'?"
```

**Solución:** La propiedad que estás usando no existe en TypeScript, revisa:

- Que hayas escrito bien el nombre de esa propiedad.
- Que hayas declarado la propiedad.

```bash
"Parser Error: Unexpected token = at column 24 in [let dia of semana1;  i = index ] in /Users/profesor/Documents/EduardoFierro/09_12/14_angular/appTeoria/src/app/bucle/bucle.component.html@8:8"
```

**Solución:** No has declarado la i. Te falta la palabra reservada `let`

```html
                        <!-- ❌👇 Revisa el let -->
<li *ngFor="let elem of array; i = index"></li>
                          <!-- ✅👇 -->
<li *ngFor="let elem of array; let i = index"></li>
```

# Herramientas / Plugins
* [Quicktype](https://quicktype.io/)
* [PostMan](https://www.postman.com/)
* [JSON Viewer](https://jsonviewer.stack.hu/)
* [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=es)
* [Angular Dev Tools](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh)
* [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)


# Ejercicios
## Ejercicio Thefork
Aquí tienes la indicaciones para practicar la web de [The Fork](https://www.thefork.es/)

### Páginas
* Inicio
* Restaurante
* Ciudad (10 mejores de XX ciudad)
* Contacto
* Yums
* Condiciones de uso
* Privacidad
* Blog
* Tarjetas de regalo

### Componentes
* Cabecera
* Descubre-tarjeta
* Buscador
* Propositos
* Slider (Selecciones/Restaurantes/Ciudad)
* Slider-Card (Selecciones/Restaurantes/Ciudad)
* Como Funciona
* Acerca TheFork
* Eres Propietario
* Footer

### Enlaces del footer
```bash
'https://quienessomos.eltenedor.es/'
'¿Quiénes somos?'

'https://www.theforkmanager.com/es-es/b2c-referral' 
'¿Tienes un restaurante?'

'https://support.eltenedor.es/'    
'Preguntas frecuentes'

'https://careers.thefork.com/'     
'Trabaja con nosotros'

'https://guide.michelin.com/es/es' 
'Colaboración Guía MICHELIN'
```

```bash
'¿Quiénes somos?' 
'Programa Yums'
'Información de contacto'
'Condiciones de uso' 
'¿Tienes un restaurante?' 
'Declaración de Privacidad y Cookies'
'Preguntas frecuentes' 
'Trabaja con nosotros' 
'Blog'
'Colaboración Guía MICHELIN' 
'Tarjeta Regalo TheFork'
```

