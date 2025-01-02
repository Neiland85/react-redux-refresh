import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Counter from '../Counter';

test('renders Counter component and handles actions', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

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

