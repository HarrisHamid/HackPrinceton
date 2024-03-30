import React from 'react';
import CardComponent from './components/CardComponent';
import './App.css';

function App() {
  // Function to handle card clicks
  const handleCardClick = (cardNumber) => {
    alert(`Card ${cardNumber} clicked!`);
    // You can also perform other actions here
  };

  return (
    <div className="main-container">
      <div className="header">
        <h1>polyglot</h1>
      </div>
      <div className="grid-container">
        {[1, 2, 3, 4].map((number) => (
          <CardComponent key={number} number={number} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
