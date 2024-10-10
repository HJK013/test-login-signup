import React, { useContext, useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage'


const LoginPage = () => {
    const SERVER_URL =  'http://localhost:4000';
    const loginInfo = {
        id : '', password: ''
    };
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext);
    const [userData, setUserData] =  useState(loginInfo);

    const handleChange = (e) => {
        setUserData({
            ...userData,  [e.target.id]: e.target.value 
        });
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${SERVER_URL}/login`, userData);
          console.log(response.data);
          alert('로그인 성공!');
          setUser(response.data);
      } catch (err) {
          setError(err.response.data.message);
      }
  }

    return (
      <CenteredContainer>
          <LoginCard>
              <CustomFont>
                  <form onSubmit={handleSubmit}>
                      <InputText 
                          id="id" 
                          placeholder="아이디" 
                          onChange={handleChange} 
                      />
                      <InputText 
                          id="password" 
                          type="password"
                          placeholder="비밀번호" 
                          onChange={handleChange} 
                      />
                      <CustomButton type="submit">로그인</CustomButton>
                      {error && <div>{error}</div>}
                      <SignupLink to="/signuppage">회원가입</SignupLink>
                  </form>
              </CustomFont>
          </LoginCard>
      </CenteredContainer>
  );
}


export default LoginPage;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0ead2;
`;

const CustomButton = styled.button`
  padding: 20px 20px;
  font-size: 16px;
  background-color: #dbe1bc;
  color: #a98467;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ccd5ae;
  }
`;

const CustomFont = styled.div`
  font-family: Georgia, serif;
  font-size: 18px;
  color: #6c584c;
`;

const LoginCard = styled.div`
  width: 300px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

const InputText = styled.input`
  width: calc(100% - 40px);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: solid #ccc;
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
`;

