import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedimensionComponent } from './redimension.component';

describe('RedimensionComponent', () => {
  let component: RedimensionComponent;
  let fixture: ComponentFixture<RedimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
