import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaSimilaresComponent } from './pelicula-similares.component';

describe('PeliculaSimilaresComponent', () => {
  let component: PeliculaSimilaresComponent;
  let fixture: ComponentFixture<PeliculaSimilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaSimilaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
