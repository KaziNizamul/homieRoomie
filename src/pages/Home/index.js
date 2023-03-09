import { useEffect } from 'react';
// external imports
import supabase from '../../config/supabaseClient';
import { connect } from 'react-redux';
// utilities
import HomeUtils from './utils/home.utils';
// components
import LoginForm from '../../molecules/loginForm/loginForm';
// styles
import styles from './home.module.scss';
import Header from '../../atoms/header.component';

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [, error] = await HomeUtils.fetchSupabaseData({ supabase });
      if (error) {
        return;
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <LoginForm
        supabase={supabase}
      />
    </div>
  )
}

const mapStateToProps = ({ homePageReducer }) => {

};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)