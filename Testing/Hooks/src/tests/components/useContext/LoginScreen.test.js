import "@testing-library/jest-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import LoginScreen from "../../../components/useContext/LoginScreen";
import UserContext from "../../../components/useContext/UserContext";

describe("Pruebas en <LoginScreen/>", () => {
  const setUser = jest.fn(() => {});

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de ejecutar setUser", () => {
    wrapper.find("Button").simulate("click");

    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "Edgar" });
  });
});
