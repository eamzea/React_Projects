import "@testing-library/jest-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import HomeScreen from "../../../components/useContext/HomeScreen";
import UserContext from "../../../components/useContext/UserContext";

describe("Pruebas en <HomeScreen/>", () => {
  const user = {
    name: "Edgar",
    email: "m.zea@live.com.mx",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
