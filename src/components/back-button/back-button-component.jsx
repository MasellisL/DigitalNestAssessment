import React from 'react';
import { useNavigate } from 'react-router-dom';
import './back-button-component.css';

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="backButton" onClick={handleClick}>
      Back
    </button>
  );
}

export default BackButton;
