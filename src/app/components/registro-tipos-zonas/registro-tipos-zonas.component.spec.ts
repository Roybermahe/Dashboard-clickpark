import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTiposZonasComponent } from './registro-tipos-zonas.component';

describe('RegistroTiposZonasComponent', () => {
  let component: RegistroTiposZonasComponent;
  let fixture: ComponentFixture<RegistroTiposZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTiposZonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTiposZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
