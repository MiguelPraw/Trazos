import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCabeceraCardComponent } from './slider-cabecera-card.component';

describe('SliderCabeceraCardComponent', () => {
  let component: SliderCabeceraCardComponent;
  let fixture: ComponentFixture<SliderCabeceraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCabeceraCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCabeceraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
