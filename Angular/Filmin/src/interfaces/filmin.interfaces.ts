export interface IResponsePeliculas {
    data: IPelicula[];
    msj:  string;
}

export interface IPelicula {
    url:          string;
    src:          string;
    portada:      string;
    fondo:        string;
    titulo:       string;
    director:     Director;
    genero:       string[];
    edad:         string;
    hd:           boolean;
    nota:         string;
    serie:        boolean;
    suscriptores: boolean;
    alquiler:     boolean;
    anio:         number;
    duracion:     string;
    descripcion:  string;
    detalles:     Detalles;
}

export interface Detalles {
    sinopsis:   string;
    premios:    Premio[];
    temas:      string[];
    directores: string[];
    reparto:    string[];
    audio:      string[];
    subtitulos: string[];
    masInfo:    MasInfo;
}

export interface MasInfo {
    tituloOriginal: string;
    pais:           string;
    estreno:        string;
    recaudacion:    string;
    espectadores:   number;
}

export interface Premio {
    premio:   string;
    cantidad: number;
}

export interface Director {
    nombre: string;
    url:    string;
}
