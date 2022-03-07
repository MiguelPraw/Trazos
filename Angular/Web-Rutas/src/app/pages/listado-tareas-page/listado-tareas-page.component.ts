import { Component, OnInit } from '@angular/core';
import { ITarea } from 'src/app/models/tareas.model';

@Component({
  selector: 'app-listado-tareas-page',
  templateUrl: './listado-tareas-page.component.html',
  styleUrls: ['./listado-tareas-page.component.scss']
})
export class ListadoTareasPageComponent implements OnInit {

  public entradaTarea:string = "";

  public listaTareasPendientes: ITarea[] = [
    
  ];

  public listaTareasCompletadas: ITarea[] = [

  ];

  constructor() { }

  ngOnInit(): void {
    this.cargaTareas();
  }

  add () {
    this.listaTareasPendientes.push({nombre: this.entradaTarea});
    this.entradaTarea = "";
    this.guardaTareas();
  }

  addHola (evento:any) {
    if(evento.key === "Enter" && this.entradaTarea !== "") {
      this.add();
    }
  }

  guardaTareas () {
    localStorage.setItem('tareasPendientes', JSON.stringify(this.listaTareasPendientes));
    localStorage.setItem('tareasCompletadas', JSON.stringify(this.listaTareasCompletadas));
  }

  cargaTareas () {
    let tareasPendientes:any = localStorage.getItem('tareasPendientes');
    this.listaTareasPendientes = JSON.parse(tareasPendientes);
    let tareasCompletadas:any = localStorage.getItem('tareasCompletadas');
    this.listaTareasCompletadas = JSON.parse(tareasCompletadas);
  }

  completaTarea (index:number) {
    this.listaTareasCompletadas.push(this.listaTareasPendientes[index]);
    this.listaTareasPendientes.splice(index, 1);
    this.guardaTareas();
  }

  borraTareaPendiente (index:number) {
    this.listaTareasPendientes.splice(index, 1);
    this.guardaTareas();
  }

  borraTareaCompletada (index:number) {
    this.listaTareasCompletadas.splice(index, 1);
    this.guardaTareas();
  }

  pendienteTarea (index:number) {
    this.listaTareasPendientes.push(this.listaTareasCompletadas[index]);
    this.listaTareasCompletadas.splice(index, 1);
    this.guardaTareas();
  }
  
}

document.addEventListener ('keyup', (evento)=> {
  if (evento.key === "Enter") {
    
  }
});