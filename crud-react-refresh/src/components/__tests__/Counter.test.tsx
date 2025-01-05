import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("renders Counter component and handles actions", () => {
  render(<Counter />);

  // Verifica que el componente se renderiza
  expect(screen.getByText(/Counter Component/i)).toBeInTheDocument();

  // Verifica el estado inicial del contador
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

  // Simula un clic en el botón de incremento
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

  // Simula un clic en el botón de decremento
  fireEvent.click(screen.getByText(/Decrement/i));
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
