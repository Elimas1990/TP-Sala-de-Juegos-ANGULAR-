import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetresultadoComponent } from './setresultado.component';

describe('SetresultadoComponent', () => {
  let component: SetresultadoComponent;
  let fixture: ComponentFixture<SetresultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetresultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetresultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
