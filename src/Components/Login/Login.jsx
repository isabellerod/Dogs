import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLostPassword from './LoginLostPassword';
import LoginResetPassword from './LoginResetPassword';
import { UserContext } from '../../Hooks/useContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to='/conta' />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='lost' element={<LoginLostPassword />} />
          <Route path='reset' element={<LoginResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;