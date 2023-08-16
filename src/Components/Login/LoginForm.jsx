import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext} from '../../Hooks/UseContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);

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
        <Button>Log in</Button>
      </form>
      <Link to='/login/create'>Register</Link>
    </section>
  );
};

export default LoginForm;