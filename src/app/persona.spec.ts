import { Persona } from './persona';

describe('Persona', () => {
  it('should create an instance', () => {
    expect(new Persona()).toBeTruthy();
  });
});

describe('Evaluar Persona', () => {
  let persona: Persona;
  beforeEach( () => {
    persona = new Persona();
  });
  it('Validar edad asignada', () => {
    [{age: 0}, {age: 5}, {age: 17}].forEach( ({age}) => {
      persona.setAge(age);
      expect(persona.getAge()).toBe(age);
    });
  })
  it('Validar edad de conducir', () => {
    [{age: 18}, {age: 42}, {age: 19}, {age: 56}].forEach( ({age}) => {
      persona.setAge(age);
      expect(persona.canDrive()).toBe(true);
    });
  }) 
})
