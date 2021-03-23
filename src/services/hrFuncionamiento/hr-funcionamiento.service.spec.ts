import { TestBed } from '@angular/core/testing';

import { HrFuncionamientoService } from './hr-funcionamiento.service';

describe('HrFuncionamientoService', () => {
  let service: HrFuncionamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrFuncionamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
