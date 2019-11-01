import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListadoComponent } from './pedidos-listado.component';

describe('PedidosListadoComponent', () => {
  let component: PedidosListadoComponent;
  let fixture: ComponentFixture<PedidosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
