import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroZonasComponent } from './registro-zonas.component';

describe('RegistroZonasComponent', () => {
  let component: RegistroZonasComponent;
  let fixture: ComponentFixture<RegistroZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroZonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
