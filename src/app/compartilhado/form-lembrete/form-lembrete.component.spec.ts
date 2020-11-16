import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLembreteComponent } from './form-lembrete.component';

describe('FormLembreteComponent', () => {
  let component: FormLembreteComponent;
  let fixture: ComponentFixture<FormLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
