import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExemplifyComponent } from './angular-exemplify.component';

describe('AngularExemplifyComponent', () => {
  let component: AngularExemplifyComponent;
  let fixture: ComponentFixture<AngularExemplifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularExemplifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExemplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
