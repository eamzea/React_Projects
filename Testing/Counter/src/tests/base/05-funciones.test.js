import "@testing-library/jest-dom";
import { getUsuarioActivo, getUser } from "../../base/05-funciones";

describe("Pruebas en 05 funciones", () => {
  test("Debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("Debe retornar un objeto pasando parametros", () => {
    const nombre = "Edgar";

    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
