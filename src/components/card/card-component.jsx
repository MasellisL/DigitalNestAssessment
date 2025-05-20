import React from 'react';
import './card-component.css'

function Card({ children }) {
    return (
      <section className="cardContainer">
        {children}
      </section>
    );
  }

export default Card