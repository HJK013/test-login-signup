import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './components/InputField';
import Button from './components/Button';

const Signup = () => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [confirmPwValue, setConfirmPwValue] = useState('');

  const handleIdChange = (event) => {
    setIdValue(event.target.value);
  };

  const handlePwChange = (event) => {
    setPwValue(event.target.value);
  };

  const handleConfirmPwChange = (event) => {
    setConfirmPwValue(event.target.value);
  };

  return (
    <CenteredContainer>
      <SignupCard>
        <CustomFont>회원가입</CustomFont>
        <InputField type="text" placeholder="아이디" value={idValue} onChange={handleIdChange} />
        <InputField type="password" placeholder="비밀번호" value={pwValue} onChange={handlePwChange} />
        <InputField type="password" placeholder="비밀번호 확인" value={confirmPwValue} onChange={handleConfirmPwChange} />
        <Button>회원가입</Button>
      </SignupCard>
    </CenteredContainer>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0ead2;
`;

const CustomFont = styled.div`
  font-family: Georgia, serif;
  font-size: 18px;
  color: #6c584c;
`;

const SignupCard = styled.div`
  width: 300px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

export default Signup;
