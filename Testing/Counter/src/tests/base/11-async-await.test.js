import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async await", () => {
  test("Debe retornar URL ", async () => {
    const url = await getImagen();

    expect(url.includes("https:")).toBe(true);
  });
});
