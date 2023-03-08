// external imports
import produce from 'immer';
// state
import { handleActions } from 'redux-actions';
// constants
import { HOME_ACTION_TYPES } from '../constants/home.constants';

const initialState = {
  fetchError: null,
  smoothies: null,
};

export default handleActions({
  [HOME_ACTION_TYPES.SET_FETCH_ERROR]: (state, payload) => produce(state, updatedState => {
    updatedState.fetchError = payload;
  }),
}, initialState);