import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignboardComponent } from './assignboard.component';

describe('AssignboardComponent', () => {
  let component: AssignboardComponent;
  let fixture: ComponentFixture<AssignboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
