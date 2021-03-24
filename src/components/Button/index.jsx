import React from 'react';
import './index.scss';

// const SIZE = ['btn--sm', 'btn--xs'];

const Button = ({ type, size, onClick, children }) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
