import React from 'react';

export const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#bdbdbd' }}
      onClick={onClick}
    />
  );
};

export const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#bdbdbd' }}
      onClick={onClick}
    />
  );
};
