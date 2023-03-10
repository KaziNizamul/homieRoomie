// internal imports
import homieRoomie from '../../public/homieRoomie.svg';
import logout from '../../public/logout.png';
// styles
import styles from './header.module.scss';

const Header = ({
  onHeaderChangeHandler, user,
}) => (
  <div className={styles.header}>
    <section className={styles.logoContainer}> 
      <img src={homieRoomie} alt="homieRoomie" height="100" width="200" />
    </section>
    {user && (
      <section className={styles.logoutContainer} onClick={onHeaderChangeHandler}>
      <img src={logout} alt='logout' title='logout' height="50" width="50"/>
      </section>
    )}
  </div>
)

export default Header;
