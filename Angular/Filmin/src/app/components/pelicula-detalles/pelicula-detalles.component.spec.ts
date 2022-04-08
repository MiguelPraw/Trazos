import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetallesComponent } from './pelicula-detalles.component';

describe('PeliculaDetallesComponent', () => {
  let component: PeliculaDetallesComponent;
  let fixture: ComponentFixture<PeliculaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
