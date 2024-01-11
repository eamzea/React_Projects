import "@testing-library/jest-dom";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { login } from "../../actions/auth";
import AppRouter from "../../routers/AppRouter";
import { act } from "@testing-library/react";
import { firebase } from "../../firebase/firebaseConfig";

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "ABC",
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <AppRouter/>", () => {
  test("Debe de llamar login si hay autenticación", async () => {
    let user;

    await act(async () => {
      const userCredentials = await firebase
        .auth()
        .signInWithEmailAndPassword("test@testing.com", "testing");

      user = userCredentials.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(login).toHaveBeenCalledWith("yLHJ711jjgQXUTacF4cRBgULgx23", null);
  });
});
