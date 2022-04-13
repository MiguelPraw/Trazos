import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum, IComment, IPhoto, IPosts, ITodos, IUser } from '../interfaces/placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(
    private httpClient : HttpClient
  ) {}

  getPosts()    : Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments() : Observable<IComment[]> {
    return this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getAlbums()   : Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos()   : Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos');
  }

  getTodos()    : Observable<ITodos[]> {
    return this.httpClient.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getUsers()    : Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

}
