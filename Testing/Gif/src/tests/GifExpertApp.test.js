import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Debe mostrarse correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista", () => {
    const wrapper = shallow(<GifExpertApp />);

    console.log(wrapper.find("GifGrid"));
    // expect(wrapper.find("GifGrid")).toBe();
  });
});
