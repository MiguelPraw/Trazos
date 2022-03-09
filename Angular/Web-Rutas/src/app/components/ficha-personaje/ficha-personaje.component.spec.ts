import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPersonajeComponent } from './ficha-personaje.component';

describe('FichaPersonajeComponent', () => {
  let component: FichaPersonajeComponent;
  let fixture: ComponentFixture<FichaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
