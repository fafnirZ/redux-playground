import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Display from './Display';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(prev => prev + 1)}>increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
      <div>
        {count}
      </div>
    </div>
  );
}

export default App;
