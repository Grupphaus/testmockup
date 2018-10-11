import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMainComponent } from './examen-main.component';

describe('ExamenMainComponent', () => {
  let component: ExamenMainComponent;
  let fixture: ComponentFixture<ExamenMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
