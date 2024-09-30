import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import { login } from '../api';

const Login = () => {
    const [formData, setFormData] = useState({ id: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(formData);
            alert('로그인 성공!');
            console.log('Access Token:', data.accessToken);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField type="text" name="id" placeholder="ID" onChange={handleChange} />
            <InputField type="password" name="password" placeholder="Password" onChange={handleChange} />
            <Button type="submit">로그인</Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
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
