import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Hooks/userContext';
import { ReactComponent as MyPictures } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddNew } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (<button aria-label='Menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>)}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
        <button onClick={handleLogout}>
          <Logout />
          {mobile && 'Logout'}
        </button>
      </nav >
    </>
  );
};

export default UserHeaderNav;