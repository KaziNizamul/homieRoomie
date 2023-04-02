import React from 'react';
// external imports
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// utilities
import HomeUtils from './utils/home.utils';
import { EMPTY_FUNCTION } from '../../utils/helper';
// components
import Header from '../../atoms/header.component';
import LoginForm from '../../molecules/loginForm/loginForm';
import SupabaseAuth from './auth';
import SurveyPage from '../Survey';
// styles
import styles from './home.module.scss';

const Home = ({
  user, supabase, onHeaderChangeHandler,
}) => (
  <div className={styles.homeContainer}>
    { <SupabaseAuth /> }
    { <Header
      user={user}
      onHeaderChangeHandler={() => onHeaderChangeHandler(supabase)}
    />}
    {!user && (
      <LoginForm
        supabase={supabase}
      />
    )}
    {user && (
      <SurveyPage />
    )}
  </div>
);

Home.propTypes = {
  user: PropTypes.object,
  supabase: PropTypes.object,
  onHeaderChangeHandler: PropTypes.func,
};

Home.defaultProps = {
  user: null,
  supabase: null,
  onHeaderChangeHandler: EMPTY_FUNCTION,
};

const mapStateToProps = ({ homePageReducer }) => ({
  supabase: _get(homePageReducer, 'supabase'),
  user: _get(homePageReducer, 'user'),
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({
  onHeaderChangeHandler: supabase => HomeUtils.onHeaderChangeHandler({ supabase }),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);
