import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxComponentComponent } from './input-box-component.component';

describe('InputBoxComponentComponent', () => {
  let component: InputBoxComponentComponent;
  let fixture: ComponentFixture<InputBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
