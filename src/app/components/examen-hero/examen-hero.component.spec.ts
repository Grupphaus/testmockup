import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenHeroComponent } from './examen-hero.component';

describe('ExamenHeroComponent', () => {
  let component: ExamenHeroComponent;
  let fixture: ComponentFixture<ExamenHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
