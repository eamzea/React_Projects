describe("Pruebas en el archivo demo.test.js", () => {
  test("deben ser iguales ", () => {
    const mensaje = "Hola Mundo";

    const mensaje2 = `Hola Mundo`;

    expect(mensaje).toBe(mensaje2);
  });
});
