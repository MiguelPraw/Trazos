import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponsePeliculas } from 'src/interfaces/filmin.interfaces';

@Injectable({
    providedIn: 'root'
})
export class DatosService {

  // <video preload="none" playsinline="" src="https://trailer.filmin.com/es/extras/mp4/drive-my-car-trailer-vose-estreno-en-cines.mp4"></video>
    
    base_url = 'https://api-filmin-npbjktwgu-miguelpraw.vercel.app/';
    /* base_url = "http://localhost:5000"; */

    constructor(
        private http : HttpClient
    ) { }

    getInicio() : Observable<any> {
        return this.http.get<any>(this.base_url);
    }

    getPeliculas() : Observable<IResponsePeliculas> {
        return this.http.get<IResponsePeliculas>(`${this.base_url}peliculas`);
    }

    getPeliculaByUrl( url : string ) : Observable<IResponsePeliculas> {
        return this.http.get<IResponsePeliculas>(`${this.base_url}pelicula/${ url }`);
    }

    getPeliculasByDirector( director : string ) : Observable<IResponsePeliculas> {
        return this.http.get<IResponsePeliculas>(`${this.base_url}peliculas/director/${ director }`)
    }

    getSeries() : Observable<IResponsePeliculas> {
        return this.http.get<IResponsePeliculas>(`${this.base_url}series`);
    }
}
