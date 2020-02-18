import React from 'react';
import "./Button.css";

interface IProps {
  label: React.ReactNode;
  handler: (event: any) => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<IProps> = ({label, handler, type='button'}) => {
  return (
    <button className='button' type={type} onClick={handler}>{label}</button>
  );
};

export default Button;