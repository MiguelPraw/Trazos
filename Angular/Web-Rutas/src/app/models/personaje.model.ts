
export interface Respuesta {
    info:    Info;
    results: (Personaje[]|Location[]);
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Personaje {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export interface Location {
    name: string;
    url:  string;
}