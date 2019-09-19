import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Concatenar número', () => {
    let component: CalculadoraComponent;
    beforeEach( () => {
      component = new CalculadoraComponent();
    });

    it('Concatenar 2 y 5 debe ser 25', () => {
      expect(component.concatenarNumero('2','5')).toBe('25');
    })

    it('Concatenar Vacio y . debe ser 0.', () => {
      expect(component.concatenarNumero("",".")).toBe("0.")
    })

    it('Concatenar Decimal(5.) y 5 debe ser 5.5', () => {
      expect(component.concatenarNumero("5.","5")).toBe("5.5")
    })

    it('Concatenar Decimal(5.5) y . debe ser 5.5', () => {
      expect(component.concatenarNumero("5.5",".")).toBe("5.5")
    })
  });
});
