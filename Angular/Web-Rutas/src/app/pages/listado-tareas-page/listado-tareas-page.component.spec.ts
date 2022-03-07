import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTareasPageComponent } from './listado-tareas-page.component';

describe('ListadoTareasPageComponent', () => {
  let component: ListadoTareasPageComponent;
  let fixture: ComponentFixture<ListadoTareasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTareasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTareasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
