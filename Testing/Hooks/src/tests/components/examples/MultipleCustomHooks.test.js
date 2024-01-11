import "@testing-library/jest-dom";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });

  test("Debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Edgar",
          quote: "Hola mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find("alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Edgar");
  });
});
