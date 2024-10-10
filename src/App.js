import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 

import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signuppage" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
const SERVER_URL = 'http://localhost:4000'; 
