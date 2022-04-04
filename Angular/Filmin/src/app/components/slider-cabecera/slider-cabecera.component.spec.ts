import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCabeceraComponent } from './slider-cabecera.component';

describe('SliderCabeceraComponent', () => {
  let component: SliderCabeceraComponent;
  let fixture: ComponentFixture<SliderCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
