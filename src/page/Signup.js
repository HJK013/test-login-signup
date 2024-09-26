import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';
import UserForm from '../components/UserForm';
import ErrorMessage, { validatePassword } from '../components/ErrorMessage';

const Signup = () => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [confirmPwValue, setConfirmPwValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwValue !== confirmPwValue) {
      setError('*위와 정확히 같은 비밀번호를 입력해주세요');
    } else {
      setError(''); // 추후 (사용자가입력한비번에따른) 회원가입 처리 로직 추가해야 함 !!
    }
  };
  

  const formData = {
    fr_title : "회원가입",
    inputs : [
     <InputField 
       type="text" 
       placeholder="아이디" 
       setState = {setIdValue}
       key="id"
     />,
     <InputField 
       type="password" 
       placeholder="비밀번호" 
       setState = {setPwValue} 
       hasError={!!error}
       key="password"
      />,
      <InputField 
       type="password" 
       placeholder="비밀번호 확인" 
       setState = {setConfirmPwValue} 
       hasError={!!error}
       key="confirm_password"
       />

    ],
    bt_msg : "회원가입",
    link_msg : "로그인",
    link: "/",
    error: error
 };


 return (
  <div>
    <UserForm formData={formData} handleSubmit={handleSubmit} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
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
