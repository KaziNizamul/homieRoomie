import { useEffect } from 'react';
// external imports
import supabase from '../../config/supabaseClient';
import { connect } from 'react-redux';
// utilities
import HomeUtils from './utils/home.utils';
// styles
import styles from './home.module.scss';
import LoginForm from '../../molecules/loginForm/loginForm';

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