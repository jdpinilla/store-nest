const myName = 'Nicolas';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
}

suma(myAge, 12);

class Persona {
  constructor(private age: number, private name: string) { }

  getSummary() {
    return `my name is ${this.name}, and my age is ${this.age}`
  }
}

const nicolas = new Persona(12, 'Nicolas');
nicolas.getSummary();