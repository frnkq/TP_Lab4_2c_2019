import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesListadoComponent } from './operaciones-listado.component';

describe('OperacionesListadoComponent', () => {
  let component: OperacionesListadoComponent;
  let fixture: ComponentFixture<OperacionesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
