import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegistrationPage1Component } from './candidate-registration-page1.component';

describe('CandidateRegistrationPage1Component', () => {
  let component: CandidateRegistrationPage1Component;
  let fixture: ComponentFixture<CandidateRegistrationPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateRegistrationPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateRegistrationPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
