import "@testing-library/jest-dom";
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en el authReducer", () => {
  test("Debe de realizar Login", () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "Edgar",
      },
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: "abc",
      name: "Edgar",
    });
  });

  test("Debe de realizar el Logout", () => {
    const initState = {
      uid: "abc",
      displayName: "Edgar",
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  test("Debe de regresar el initState", () => {
    const initState = {
      uid: "abc",
      displayName: "Edgar",
    };

    const action = {
      type: "something",
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
