import "@testing-library/jest-dom";
const { getSaludo } = require("../../base/02-template-string");

describe("Pruebas 02-template-string.js", () => {
  test("Debe retornar Hola Edgar", () => {
    const nombre = "Edgar";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("Debe retornar Hola Arturo", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Arturo");
  });
});
