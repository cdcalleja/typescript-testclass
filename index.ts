// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  readonly nombre: string;
  readonly apellido: string;
  private dni: number;
  readonly fechaNacimiento: number;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public toString(): string {
    return this.nombre + this.apellido;
  }
  public edad(añoActual: number): number {
    return añoActual - this.fechaNacimiento;
  }

  get Nombre(): string {
    return this.nombre;
  }
  get Apellido(): string {
    return this.apellido;
  }

  set Dni(dni: number) {
    return (this.dni = dni);
  }

  set añoNac(fechaNacimiento: number) {
    return (this.fechaNacimiento = fechaNacimiento);
  }
}
