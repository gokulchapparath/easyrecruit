import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedcvComponent } from './rejectedcv.component';

describe('RejectedcvComponent', () => {
  let component: RejectedcvComponent;
  let fixture: ComponentFixture<RejectedcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
