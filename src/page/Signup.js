import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';
import UserForm from '../components/UserForm';
import ErrorMessage, { validatePassword } from '../components/ErrorMessage';
import api from '../api';

const Signup = () => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [confirmPwValue, setConfirmPwValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordErrors = validatePassword(pwValue);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join(' '));
      return;
    }
    if (pwValue !== confirmPwValue) {
      setError('*위와 정확히 같은 비밀번호를 입력해주세요');
      return;
    }

    try {
      setError(''); // 오류 메시지 초기화
      const response = await api.post('/signup', { id: idValue, password: pwValue }); // api.post를 사용해 회원가입 요청 보낼수있게
      // ㅊ후 회원가입 성공 로직 추가-!
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
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

