import { Component, OnInit } from '@angular/core';
import { IAlbum, IComment, IPhoto, IPosts, ITodos, IUser } from './interfaces/placeholder.interface';
import { PlaceholderService } from './services/placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Peticiones';

  pokedex   : any = [];

  posts     : IPosts[]    = [];
  comments  : IComment[]  = [];
  albums    : IAlbum[]    = [];
  photos    : IPhoto[]    = [];
  todos     : ITodos[]    = [];
  users     : IUser[]     = [];

  constructor( 
    private placeholderService : PlaceholderService
  ) {}

  ngOnInit() : void {

    this.placeholderService.getPosts().subscribe( ( datos : IPosts[] ) => {
      this.posts = datos;
    })

    this.placeholderService.getComments().subscribe( ( datos : IComment[] ) => {
      this.comments = datos;
    });

    this.placeholderService.getAlbums().subscribe( ( datos : IAlbum[] ) => {
      this.albums = datos;
    });

    this.placeholderService.getPhotos().subscribe( ( datos : IPhoto[] ) => {
      this.photos = datos;
    });

    this.placeholderService.getTodos().subscribe( ( datos : ITodos[] ) => {
      this.todos = datos;
    });

    this.placeholderService.getUsers().subscribe( ( datos : IUser[] ) => {
      this.users = datos;
    });

    // this.httpClient
    //   .get("https://pokeapi.co/api/v2/pokemon")
    //   .subscribe( (datos : any) => {
    //     this.pokedex = datos.results;
    //   });

    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/comments')
    //   .subscribe( ( datos : any ) => {
    //     this.comments = datos;
    //   });

    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/albums')
    //   .subscribe( ( datos : any ) => {
    //     this.albums = datos;
    //   });

    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/photos')
    //   .subscribe( ( datos : any ) => {
    //     this.photos = datos;
    //   });

    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/todos')
    //   .subscribe( ( datos : any) => {
    //     this.todos = datos;
    //   });

    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe( ( datos : any ) => {
    //     this.users = datos;
    //   });
  }

}

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/photos
// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/users
