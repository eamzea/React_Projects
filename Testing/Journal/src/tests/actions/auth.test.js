import "@testing-library/jest-dom";
import { login, logout, startLogin, startLogout } from "../../actions/auth";
import { types } from "../../types/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("Pruebas en auth actions", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("Login y logout con la acción respectiva ", () => {
    const uid = "ABC123";
    const displayName = "Fernando";

    const loginAction = login(uid, displayName);

    expect(loginAction).toMatchObject({
      type: types.login,
      payload: {
        uid: uid,
        displayName: displayName,
      },
    });

    const logoutAction = logout();
    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  test("Debe de realizar el logout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout,
    });

    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  // test("Debe de realizar el login con email y password", async () => {
  //   await store.dispatch(startLogin("test@testing.com", "testing"));

  //   const actions = store.getActions();

  //   expect(actions[1]).toEqual({
  //     type: types.login,
  //     payload: {
  //       uid: "yLHJ711jjgQXUTacF4cRBgULgx23",
  //       displayName: null,
  //     },
  //   });
  // });
});
