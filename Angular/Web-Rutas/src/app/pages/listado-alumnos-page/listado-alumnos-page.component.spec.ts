import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnosPageComponent } from './listado-alumnos-page.component';

describe('ListadoAlumnosPageComponent', () => {
  let component: ListadoAlumnosPageComponent;
  let fixture: ComponentFixture<ListadoAlumnosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAlumnosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
