import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.scss']
})
export class ReactivoComponent implements OnInit {

  contacto : FormGroup = this.fb.group({
    nombreUsuario : [ 
      '' , 
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern(''),
      ]
    ],
    email : ['timmy@mail.com'],
    edad : 32
  });

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void { }

}
