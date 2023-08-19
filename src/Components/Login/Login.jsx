import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLostPassword from './LoginLostPassword';
import LoginResetPassword from './LoginResetPassword';
import { UserContext } from '../../Hooks/useContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to='/conta' />

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='lost' element={<LoginLostPassword />} />
        <Route path='reset' element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;