import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPeliculasCardComponent } from './slider-peliculas-card.component';

describe('SliderPeliculasCardComponent', () => {
  let component: SliderPeliculasCardComponent;
  let fixture: ComponentFixture<SliderPeliculasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPeliculasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPeliculasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
