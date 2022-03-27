
export interface Menu {
    empresa : string
}

export interface ElementoLista {
    nombre      : string,
    elementos   : Elemento[]
}

export interface Elemento {
    nombre  : string,
    src     : string
}

export interface Mueble {
    autor       : string,
    nombre      : string,
    descripcion : string,
    src         : string
}