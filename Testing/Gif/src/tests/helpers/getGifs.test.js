import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs Fetch", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("Pikachu");

    expect(gifs.length).toBe(10);
  });

  test("Debe de traer 0 elementos", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
