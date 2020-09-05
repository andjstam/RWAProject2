import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaKorisniciComponent } from './pretraga-korisnici.component';

describe('PretragaKorisniciComponent', () => {
  let component: PretragaKorisniciComponent;
  let fixture: ComponentFixture<PretragaKorisniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaKorisniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
