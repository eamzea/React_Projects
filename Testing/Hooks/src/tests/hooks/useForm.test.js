import "@testing-library/jest-dom";
import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Edgar",
    email: "m.zea@live.com.mx",
  };

  test("Debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe cambiar el valor del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Arturo",
        },
      });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual({ ...initialForm, name: "Arturo" });
  });

  test("Debe re-establecer los valores", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Arturo",
        },
      });

      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
});
