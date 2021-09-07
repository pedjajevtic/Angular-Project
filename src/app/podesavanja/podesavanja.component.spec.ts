import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodesavanjaComponent } from './podesavanja.component';

describe('PodesavanjaComponent', () => {
  let component: PodesavanjaComponent;
  let fixture: ComponentFixture<PodesavanjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodesavanjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodesavanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
