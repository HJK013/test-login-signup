import React from 'react';
import styled from 'styled-components';

const InputField = ({ type, placeholder, setState, id}) => {

  const handleChange = (e) => {
    setState(e.target.value);
  };
  
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      hasError={hasError}
    />
  );
};

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
`;
export default InputField;
