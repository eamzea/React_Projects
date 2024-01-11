import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar value enviado por props", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("100");
  });

  test("Debe de incrementar con el botón +1", () => {
    const wrapper = shallow(<CounterApp value={10} />);

    wrapper.find(".buttonContainer").childAt(2).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("11");
  });

  test("Debe de incrementar con el botón -1", () => {
    const wrapper = shallow(<CounterApp value={10} />);

    wrapper.find(".buttonContainer").childAt(0).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("9");
  });

  test("Debe de regresar al valor inicial", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find(".buttonContainer").childAt(2).simulate("click");
    wrapper.find(".buttonContainer").childAt(2).simulate("click");
    wrapper.find(".buttonContainer").childAt(1).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("105");
  });
});
