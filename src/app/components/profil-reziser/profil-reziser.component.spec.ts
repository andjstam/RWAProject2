import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilReziserComponent } from './profil-reziser.component';

describe('ProfilReziserComponent', () => {
  let component: ProfilReziserComponent;
  let fixture: ComponentFixture<ProfilReziserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilReziserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilReziserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
