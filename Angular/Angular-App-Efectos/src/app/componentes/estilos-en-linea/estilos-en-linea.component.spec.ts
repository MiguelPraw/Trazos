import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosEnLineaComponent } from './estilos-en-linea.component';

describe('EstilosEnLineaComponent', () => {
  let component: EstilosEnLineaComponent;
  let fixture: ComponentFixture<EstilosEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosEnLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
