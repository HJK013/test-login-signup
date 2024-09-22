import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

const Login = () => {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');


  const formData = {
    fr_title : "로그인",
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
       key="password"
     />
    ],
    bt_msg : "로그인",
    link_msg : "회원가입",
    link: "/signup"
    
 };

 return (
     <UserForm formData={formData}/>
 );
};


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


export default Login;