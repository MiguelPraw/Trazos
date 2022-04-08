import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaCabeceraComponent } from './pelicula-cabecera.component';

describe('PeliculaCabeceraComponent', () => {
  let component: PeliculaCabeceraComponent;
  let fixture: ComponentFixture<PeliculaCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaCabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
