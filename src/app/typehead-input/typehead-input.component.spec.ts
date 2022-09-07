import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeheadInputComponent } from './typehead-input.component';

describe('TypeheadInputComponent', () => {
  let component: TypeheadInputComponent;
  let fixture: ComponentFixture<TypeheadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeheadInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeheadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
