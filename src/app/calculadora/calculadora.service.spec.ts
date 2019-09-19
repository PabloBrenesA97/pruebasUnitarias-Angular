import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
});

describe('Sumar', () => {

  it('10+15 debe ser 25', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.sumar(10, 15)).toBe(25);
    }));

  it('10.5+15.5 debe ser 26', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.sumar(10.5, 15.5)).toBe(26);
    }));
});

describe('Restar', () => {

  it('15-10 debe ser 5', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.restar(15, 10)).toBe(5);
    }));

  it('15.5-10.5 debe ser 4', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.restar(15.5, 10.5)).toBe(5);
    }));
});
describe('Dividir', () => {

  it('Dividir entre cero: debe generar una excepción', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(function(){
        service.dividir(2, 0);
      }).toThrowError(Error, 'División por cero');
    }));

  it('', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.sumar(10.5, 15.5)).toBe(26);
    }));
});
