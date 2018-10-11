import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFooterComponent } from './examen-footer.component';

describe('ExamenFooterComponent', () => {
  let component: ExamenFooterComponent;
  let fixture: ComponentFixture<ExamenFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
