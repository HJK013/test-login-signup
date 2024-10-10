import React, { useContext, useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import UserForm from '../components/UserForm';
import ErrorMessage from '../components/ErrorMessage';
import { UserContext } from '../contexts/UserContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from'axios';

const SignUpPage = () => {
  const SERVER_URL = 'http://localhost:4000';
  const { setUser } = useContext(UserContext);
  const [userData, setUserData] = useState({ id: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
      setUserData({
          ...userData,  
          [e.target.name]: e.target.value 
      });
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${SERVER_URL}/users`, userData);
          console.log(response.status);      // 회원가입 성공 시 http 상태 코드만 보내줌
          alert('회원가입 성공!');
          setUser(response.data); // 사용자 정보 업데이트
      } catch (err) {
          setError(err.response.data.message);   // 백엔드에서 회원가입 실패 원인을 알려줌
      }
  }

  return (
      <CenteredContainer>
          <SignupCard>
              <CustomFont>
                  <form onSubmit={handleSubmit}>
                      <InputField 
                          type="text" 
                          name="id" 
                          placeholder="아이디" 
                          setState={(value) => setUserData({ ...userData, id: value })} 
                      />
                      <InputField 
                          type="email" 
                          name="email" 
                          placeholder="이메일" 
                          setState={(value) => setUserData({ ...userData, email: value })} 
                      />
                      <InputField 
                          type="password" 
                          name="password" 
                          placeholder="비밀번호" 
                          setState={(value) => setUserData({ ...userData, password: value })} 
                      />
                      <Button type="submit">회원가입</Button>
                      {error && <ErrorMessage>{error}</ErrorMessage>}
                      <SignupLink to="/">로그인</SignupLink>
                  </form>
              </CustomFont>
          </SignupCard>
      </CenteredContainer>
  );
}

export default SignUpPage;

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

const SignupLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: right;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
