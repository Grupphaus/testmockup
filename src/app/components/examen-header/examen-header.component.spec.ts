import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenHeaderComponent } from './examen-header.component';

describe('ExamenHeaderComponent', () => {
  let component: ExamenHeaderComponent;
  let fixture: ComponentFixture<ExamenHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
