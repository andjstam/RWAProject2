import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReziserComponent } from './reziser.component';

describe('ReziserComponent', () => {
  let component: ReziserComponent;
  let fixture: ComponentFixture<ReziserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReziserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReziserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
