
export interface IAlumno {
    nombre      :string;
    apellidos   :string;
    fecha       :number;

}

class Alumno implements IAlumno {

    nombre      :string = "";
    apellidos   :string = "";
    fecha       :number = 0;

    constructor (alumno:IAlumno) {
        this.nombre = alumno.nombre;
        this.apellidos = alumno.apellidos;
        this.fecha = alumno.fecha;
    }

    getEdad () {
        
    }
}