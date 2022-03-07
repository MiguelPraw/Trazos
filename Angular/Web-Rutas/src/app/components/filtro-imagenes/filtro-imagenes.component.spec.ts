import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroImagenesComponent } from './filtro-imagenes.component';

describe('FiltroImagenesComponent', () => {
  let component: FiltroImagenesComponent;
  let fixture: ComponentFixture<FiltroImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
