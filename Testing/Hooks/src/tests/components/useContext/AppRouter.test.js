import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../../components/useContext/AppRouter";
import UserContext from "../../../components/useContext/UserContext";

describe("Pruebas en <AppRouter/>", () => {
  const user = {
    name: "Edgar",
    email: "m.zea@live.com.mx",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
