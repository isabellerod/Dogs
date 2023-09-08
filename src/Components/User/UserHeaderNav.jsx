import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Hooks/userContext';
import { ReactComponent as MyPictures } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddNew } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to='/account' end>
        <MyPictures />
        {mobile && 'My Pictures'}
      </NavLink>
      <NavLink to='/account/statistics'>
        <Statistics />
        {mobile && 'Statistics'}
      </NavLink>
      <NavLink to='/account/post'>
        <AddNew />
        {mobile && 'Add New'}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && 'Logout'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;