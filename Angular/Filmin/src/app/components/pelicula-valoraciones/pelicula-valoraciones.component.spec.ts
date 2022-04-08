import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaValoracionesComponent } from './pelicula-valoraciones.component';

describe('PeliculaValoracionesComponent', () => {
  let component: PeliculaValoracionesComponent;
  let fixture: ComponentFixture<PeliculaValoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaValoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaValoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
