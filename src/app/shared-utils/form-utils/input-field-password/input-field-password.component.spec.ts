import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldPasswordComponent } from './input-field-password.component';

describe('InputFieldPasswordComponent', () => {
  let component: InputFieldPasswordComponent;
  let fixture: ComponentFixture<InputFieldPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
