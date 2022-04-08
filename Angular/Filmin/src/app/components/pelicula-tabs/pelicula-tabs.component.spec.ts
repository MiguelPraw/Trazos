import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTabsComponent } from './pelicula-tabs.component';

describe('PeliculaTabsComponent', () => {
  let component: PeliculaTabsComponent;
  let fixture: ComponentFixture<PeliculaTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
