import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import RealExampleRef from "../../../components/useRef/RealExampleRef";

describe("Pruebas en <RealExampleRed/>", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("Debe mostrar el componente <MultipleCustomHooks/>", () => {
    wrapper.find("Button").simulate("click");

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
