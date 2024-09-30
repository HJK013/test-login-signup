import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import UserForm from '../components/UserForm';
import ErrorMessage from '../components/ErrorMessage';
import { signup } from '../api';

const Signup = () => {
    const [formData, setFormData] = useState({ id: '', email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
            alert('회원가입 성공!');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField type="text" name="id" placeholder="ID" onChange={handleChange} />
            <InputField type="email" name="email" placeholder="Email" onChange={handleChange} />
            <InputField type="password" name="password" placeholder="Password" onChange={handleChange} />
            <Button type="submit">회원가입</Button>
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
