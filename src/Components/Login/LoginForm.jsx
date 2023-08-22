import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Hooks/userContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Log in</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='User' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? <Button disabled>Loading...</Button> : <Button>Log in</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to='login/lost'>Forgot you password?</Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>Still not a member? Register now!</p>
        <Link className={stylesBtn.button} to='/login/create'>Register</Link>
      </div>

    </section>
  );
};

export default LoginForm;