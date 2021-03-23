import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilantesComponent } from './vigilantes.component';

describe('UserProfileComponent', () => {
  let component: VigilantesComponent;
  let fixture: ComponentFixture<VigilantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigilantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigilantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
