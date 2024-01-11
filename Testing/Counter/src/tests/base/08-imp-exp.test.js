import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Héroes", () => {
  test("Debe retornar 1 héroe por ID", () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeData = heroes.find((hero) => hero.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefined si no existe héroe", () => {
    const id = undefined;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((hero) => hero.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("Debe retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
