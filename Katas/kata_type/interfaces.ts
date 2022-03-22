
interface Estudiante {
    nombre      : string,
    apellido    : string,
    edad?       : number,
    saludo?      : Function
}

interface Pelicula {
    nombre      : string,
    caratula    : string,
    anio        : number,
    actores     : Actor[]
}

interface Actor {
    nombre      : string,
    apellidos   : string
}

export default Estudiante;