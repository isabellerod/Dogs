import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Hooks/useContext';

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
    <section>
      <h1>Log in</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label='User' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? <Button disabled>Loading...</Button> : <Button>Log in</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to='/login/create'>Register</Link>
    </section>
  );
};

export default LoginForm;