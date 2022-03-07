import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public modalAbierto : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public abrirModal() {
    this.modalAbierto = true;
  }

  public cerrarModal () {
    this.modalAbierto = false;
  }

}
