import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlashComponent } from './carlash.component';

describe('CarlashComponent', () => {
  let component: CarlashComponent;
  let fixture: ComponentFixture<CarlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
