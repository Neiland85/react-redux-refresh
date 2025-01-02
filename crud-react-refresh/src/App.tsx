import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { RootState } from './redux/store'; 
import { increment, decrement, incrementByAmount } from './redux/slices/counterSlice'; 
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Redux!</p>
        <p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Increment by 5
          </button>
        </p>
        <p>Redux Counter: {count}</p>
        <img src={viteLogo} className="App-logo" alt="Vite logo" />
      </header>
    </div>
  );
}

export default App;

