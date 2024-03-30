import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <h1>polyglot</h1>
      </div>
      <div className="grid-container">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default App;
