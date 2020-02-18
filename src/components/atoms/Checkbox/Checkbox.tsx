import React from 'react';
import "./Checkbox.css";

interface IProps {
  name?: string;
  placeholder: string;
  type?: string;
  reference?: any;
  defaultValue?: string;
}

const Checkbox: React.FC<IProps> = ({name, placeholder, type='checkbox', reference, defaultValue}) => {
  return (
    <input className='checkbox' name={name} placeholder={placeholder} type={type} ref={reference} defaultValue={defaultValue} />
  );
};

export default Checkbox;