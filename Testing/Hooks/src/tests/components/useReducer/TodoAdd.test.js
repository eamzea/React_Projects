import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import TodoAdd from "../../../components/useReducer/TodoAdd";

describe("Pruebas en <TodoAdd/>", () => {
  const handelAddTodo = jest.fn(() => {});

  const wrapper = shallow(<TodoAdd handelAddTodo={handelAddTodo} />);

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar handelAddTodo", () => {
    const formSubmit = wrapper.find("Form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handelAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar handelAddTodo", () => {
    const value = "Aprender React";
    wrapper.find("FormControl").simulate("onChange", {
      target: {
        value,
        name: "description",
      },
    });

    const newTodo = {
      id: new Date().getTime(),
      desc: value,
      done: false,
    };

    const formSubmit = wrapper.find("Form").prop("onSubmit");

    formSubmit({ preventDefault() {} });
    handelAddTodo(newTodo);

    expect(handelAddTodo).toHaveBeenCalledTimes(1);
    expect(handelAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handelAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find("FormControl").prop("value")).toBe("");
  });
});
