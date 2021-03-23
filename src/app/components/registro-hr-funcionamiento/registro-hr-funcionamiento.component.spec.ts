import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHrFuncionamientoComponent } from './registro-hr-funcionamiento.component';

describe('RegistroHrFuncionamientoComponent', () => {
  let component: RegistroHrFuncionamientoComponent;
  let fixture: ComponentFixture<RegistroHrFuncionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHrFuncionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroHrFuncionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
