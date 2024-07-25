const myName = 'Juan';
const myAge = 23;
const suma = (a: number, b: number) => {
  return a + b;
};

const nuevoValor = suma(123, 3);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}
  getSummary() {
    return `my name is ${this.name}, y edad ${this.age}`;
  }
}

const oPersona = new Persona(12, 'Jose');
oPersona.getSummary();
