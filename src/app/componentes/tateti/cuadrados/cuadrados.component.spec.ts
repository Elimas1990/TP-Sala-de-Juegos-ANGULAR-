import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradosComponent } from './cuadrados.component';

describe('CuadradosComponent', () => {
  let component: CuadradosComponent;
  let fixture: ComponentFixture<CuadradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
