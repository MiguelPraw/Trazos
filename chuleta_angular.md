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




