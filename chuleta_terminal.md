
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
    }

    h4 {
        color: green;
        text-align: center;
    }

    i {
        font-weight: bold;
    }
</style>

# NodeJS

Para instalar Node, ir a la web de NodeJS y descargarlo. 

NodeJS permite ejecutar JavaScript en el ordenador desde la terminal; se trabaja con módulos/dependencias/librerias/paquetes, el nombre varia en función de dónde se esté trabajando con ellos.

Todos los módulos se guardan en <i>node_modules</i>.

## Empaquetadores

<i>NPM</i> es el empaquetador por defecto de NodeJS. Se utiliza para iniciar los proyectos.

```bash
    # Inicia un proyecto por defecto
    npm init -y            
    
    # Inicia un proyecto personalizado
    npm init                

    # Instala JQuery
    npm install jquery      

    # Lee el package.json e instala los módulos de nuevo
    npm install             
```

En el package.json conviene eliminar el <b>^</b> de delante de las versiones. Esto hará que se instale solo la versión que queremos.

Si añadimos al final del comando <b>-</b> sirve para indicar el argumento.

```bash
    npm i jquery@latest

    npm i jquery --save

    npm init --yes      <-->         npm init -y      
```
---

### Nodemon

Recomendado instalar Nodemon para ver en consola en directo los console.log que hagamos.

```bash
npm install nodemon -D
```

En el package.json, dentro de "scripts", añadimos la linea:

```json
"start": "npx nodemon index" // Inicia nodemon con el archivo index.js
```

```bash
npm run start           # Lanza el comando start del package.json
```

---

### TypeScript

Para instalar TypeScript desde consola:

```bash
npm install typescript -D
```

Es necesario tener instalado TypeScript de forma global para usar el comando genérico. En caso contrario, utilizaremos NPX. Para transpilar TypeScript:

```bash
tsc <nombreArchivoTS>       # Transforma el TS a JS por defecto

npx tsc <nombreArchivoTS>   # NPX ejecuta algo que este en modo Desarrollo
```

Para configurar el script que transpile el TS y ahorrar trabajo en consola, añadimos en el **package.json**:

```bash
"start" : "npx tsc index && node index"

npm run start
```

```bash
npx tsc --init          # Crea el archivo de configuración de TypeScript

npx tsc -w              # Inicia la transpilación sincronizada
```

#### RESUMEN

```bash
npm init -y                         #
npm i nodemon -D                    #   Instala los JSON 
npm i typescript -D                 #

npx tsc --init                      #   
npx tsc -w                          #   Inicia la consola
npx nodemon index                   #
```

---



