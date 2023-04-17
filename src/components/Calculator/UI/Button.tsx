import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  size?: 'large' | 'small';
  color?: 'primary' | 'secondary';
  onClick?: () => void;
  label: string;
  fontSize?: string;
  fontColor?: string;
  value: string;
  type: 'number' | 'operator' | 'specialChar';
}

const Button: React.FC<ButtonProps> = ({ size, color, onClick, label, fontSize, fontColor, value, type }) => {
  const handleButtonClick = () => {
    onClick(value, type);
  };

  return (
    <button
      className={`rounded-full`}
      style={{
        backgroundColor: color,
        width: 50,
        height: 50,
        margin: 5,
        fontSize: fontSize || '1rem',
        color: fontColor || '#FFFFFF'
      }}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
