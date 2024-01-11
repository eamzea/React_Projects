import "@testing-library/jest-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import TodoApp from "../../../components/useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("Pruebas en <TodoApp/>", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("p").text().trim()).toBe("To Do App (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Debe borrar un TODO", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    expect(wrapper.find("p").text().trim()).toBe("To Do App (1)");

    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
    expect(wrapper.find("p").text().trim()).toBe("To Do App (0)");
  });
});
