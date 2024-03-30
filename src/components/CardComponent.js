import React from 'react';
import './CardComponent.css'; // You can also define card specific styles

function CardComponent({ number, onClick }) {
  return (
    <div className="card" onClick={() => onClick(number)}>
      Card {number}
    </div>
  );
}

export default CardComponent;
