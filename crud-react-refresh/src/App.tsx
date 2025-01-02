import React from 'react';
import Counter from './components/Counter';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>¡REACT + REDUX!</p>
        <Counter /> {/* Usamos el componente Counter aquí */}
        <img src={viteLogo} className="App-logo" alt="Vite logo" />
      </header>
    </div>
  );
}

export default App;

