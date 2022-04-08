import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaExtrasComponent } from './pelicula-extras.component';

describe('PeliculaExtrasComponent', () => {
  let component: PeliculaExtrasComponent;
  let fixture: ComponentFixture<PeliculaExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
