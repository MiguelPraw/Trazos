import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetallesCardComponent } from './pelicula-detalles-card.component';

describe('PeliculaDetallesCardComponent', () => {
  let component: PeliculaDetallesCardComponent;
  let fixture: ComponentFixture<PeliculaDetallesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaDetallesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetallesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
