import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterMenuComponent } from './recruiter-menu.component';

describe('RecruiterMenuComponent', () => {
  let component: RecruiterMenuComponent;
  let fixture: ComponentFixture<RecruiterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
