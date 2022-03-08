import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRickMortyComponent } from './listado-rick-morty.component';

describe('ListadoRickMortyComponent', () => {
  let component: ListadoRickMortyComponent;
  let fixture: ComponentFixture<ListadoRickMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRickMortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
