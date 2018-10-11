import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenTablaComponent } from './examen-tabla.component';

describe('ExamenTablaComponent', () => {
  let component: ExamenTablaComponent;
  let fixture: ComponentFixture<ExamenTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
