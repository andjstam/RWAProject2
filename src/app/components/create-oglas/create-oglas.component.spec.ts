import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOglasComponent } from './create-oglas.component';

describe('CreateOglasComponent', () => {
  let component: CreateOglasComponent;
  let fixture: ComponentFixture<CreateOglasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOglasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
