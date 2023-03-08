import { useEffect, useState } from 'react';
// external imports
import supabase from '../../config/supabaseClient';
import { connect } from 'react-redux';
// internal imports
import LoginForm from '../../molecules/loginForm/loginForm';
// utilitie
import HomeUtils from './utils/home.utils';
// styles
import styles from './home.module.scss';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  // const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [, error] = await HomeUtils.fetchSupabaseData({ supabase });
      if (error) {
        setFetchError(error.message);
        return;
      } else {
        // setSmoothies(data);
        setFetchError(null);
      }
    } catch (error) {
      // setSmoothies(null);
      setFetchError(error);
    }
  };

  console.log(supabase);
  return (
    <div className={styles.homeContainer}>
      {fetchError && <p>{fetchError}</p>}
      {<LoginForm />}
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