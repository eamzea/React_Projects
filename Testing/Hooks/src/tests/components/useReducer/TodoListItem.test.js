import "@testing-library/jest-dom";
import React from "react";
import TodoListItem from "../../../components/useReducer/TodoListItem";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoListItem/>", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      ind={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar la función handleDelete", () => {
    wrapper.find("Button").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de llamar la función handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de mostrar el texto correctamente", () => {
    expect(wrapper.find("p").text().trim()).toEqual(
      `${demoTodos[0].id} . ${demoTodos[0].desc}`
    );
  });

  test("Debe de tener la clase complete si está en true", () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        ind={todo.id}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
