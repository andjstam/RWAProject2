import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaOglasiComponent } from './pretraga-oglasi.component';

describe('PretragaOglasiComponent', () => {
  let component: PretragaOglasiComponent;
  let fixture: ComponentFixture<PretragaOglasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaOglasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaOglasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
