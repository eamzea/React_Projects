import "@testing-library/jest-dom";
import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar valores por defect", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.state).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe de retornar valores por defect", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.state).toBe(100);
  });

  test("Debe de incrementar el counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { state } = result.current;
    expect(state).toBe(101);
  });

  test("Debe de decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { state } = result.current;
    expect(state).toBe(99);
  });

  test("Debe de resetear el counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { state } = result.current;
    expect(state).toBe(100);
  });
});
