/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
// external imports
import _get from 'lodash/get';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import supabaseData from '../../config/supabaseClient';
// utils
import { EMPTY_OBJECT } from '../../utils/helper';

const Auth = ({
  setUser, setSupabase, supabase,
}) => {
  useEffect(() => {
    setSupabase(supabaseData);
  }, []);

  useEffect(() => {
    if (!supabase) return;
    supabase?.auth.getSession()
      .then(({ data: { session = EMPTY_OBJECT } = EMPTY_OBJECT }) => {
        setUser(session?.user);
      });

    const { data: authListener = [] } = supabase?.auth?.onAuthStateChange(
      async (event, session) => {
        switch (event) {
          case 'SIGNED_IN': {
            setUser(session?.user);
            break;
          }
          case 'SIGNED_OUT': {
            setUser(null);
            break;
          }
          default: {
            break;
          }
        }
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, [supabase]);
};

Auth.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ homePageReducer }) => ({
  supabase: _get(homePageReducer, 'supabase'),
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch({ type: 'SET_USER', payload: user }),
  setSupabase: supabase => dispatch({ type: 'SET_SUPABASE', payload: supabase }),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Auth);
