import React from "react";
// import { render } from "@testing-library/react"; JEST EXTEND
import App from "../App";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Pruebas en <App/>", () => {
  // test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
  //   const saludo = "Hola, Soy Goku";

  //   const { getByText } = render(<App saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // JEST EXTEND
  // });
  test("Debe de mostrar <App/> correctamente", () => {
    const saludo = "Hola, Soy Goku";
    const wrapper = shallow(<App saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar subtítulo enviado por props", () => {
    const saludo = "Hola, Soy Goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(<App saludo={saludo} subtitulo={subtitulo} />);
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
