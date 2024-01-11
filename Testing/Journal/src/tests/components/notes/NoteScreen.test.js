import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { activeNote } from "../../../actions/notes";
import Sidebar from "../../../components/journal/Sidebar";
import NoteScreen from "../../../components/notes/NoteScreen";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "1",
    name: "Edgar",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 123,
      title: "Title Test",
      body: "Body Test",
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("Pruebas en <NoteScreen/>", () => {
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de disparar el active note ", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Title Test changed",
      },
    });

    expect(activeNote).toHaveBeenLastCalledWith(123, {
      body: "Body Test",
      title: "Title Test changed",
      id: 123,
      date: 0,
    });
  });
});
