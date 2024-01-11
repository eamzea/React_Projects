import "@testing-library/jest-dom";
import React from "react";
import { todoReducer } from "../../../components/useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("Debe de agregar un TODO", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Express",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("Debe de eliminar un TODO", () => {
    const action = {
      type: "delete",
      payload: 3,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(2);
    expect(state).toEqual(demoTodos);
  });

  test("Debe de hacer toggle a un TODO", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toEqual(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
