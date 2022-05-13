import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasGridComponent } from './peliculas-grid.component';

describe('PeliculasGridComponent', () => {
  let component: PeliculasGridComponent;
  let fixture: ComponentFixture<PeliculasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
