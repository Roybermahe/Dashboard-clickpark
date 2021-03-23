import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanzionesComponent } from './sanziones.component';

describe('TableListComponent', () => {
  let component: SanzionesComponent;
  let fixture: ComponentFixture<SanzionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanzionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanzionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
