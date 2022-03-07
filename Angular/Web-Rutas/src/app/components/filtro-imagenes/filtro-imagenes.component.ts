import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-imagenes',
  templateUrl: './filtro-imagenes.component.html',
  styleUrls: ['./filtro-imagenes.component.scss']
})
export class FiltroImagenesComponent implements OnInit {

  public listaImagenes = [
    {url: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2012/12/Hobbit.jpg?fit=960%2C640&ssl=1", categoria: "hobbit"},
    {url: "https://fotografias.antena3.com/clipping/cmsimages02/2019/12/18/13CD223F-7DFA-4BFE-898B-0A762C06A31A/98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply", categoria: "orco"},
    {url: "https://static1.abc.es/media/play/2021/08/13/1_55RhpaaCd7DCsCdHzyg7JQ-kLzH--1200x630@abc.jpeg", categoria: "hobbit"},
    {url: "https://www.eluniversal.com.mx/sites/default/files/2019/12/18/orcos_el_senor_de_los_anillos.jpg", categoria: "orco"},
    {url: "http://cinetribuna.opennemas.com//media/cinetribuna/images/2016/03/27//2016032719452376946.jpg", categoria: "orco"},
    {url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sean-astin-lord-of-the-rings-fotogramas-1614275938.jpg", categoria: "hobbit"}
  ];

  public categoria:string = "";
  public modalAbierto:boolean = false;
  public urlActivo:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public filtra (categoria:string) {
    this.categoria = categoria;
  }

  public abreModal (url:string) {
    this.modalAbierto = true;
    this.urlActivo = url;
  }

  public cierraModal () {
    this.modalAbierto = false;
  }

}
