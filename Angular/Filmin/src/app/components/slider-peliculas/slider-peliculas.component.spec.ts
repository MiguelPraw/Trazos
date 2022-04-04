import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPeliculasComponent } from './slider-peliculas.component';

describe('SliderPeliculasComponent', () => {
  let component: SliderPeliculasComponent;
  let fixture: ComponentFixture<SliderPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
