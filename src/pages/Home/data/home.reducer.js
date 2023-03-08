// external imports
import produce from 'immer';
// state
import { handleActions } from 'redux-actions';
// constants

const initialState = {
  fetchError: null,
  smoothies: null,
};

export const HOME_ACTION_TYPES = {
  SET_FETCH_ERROR: 'SET_FETCH_ERROR',
  SET_SMOOTHIES: 'SET_SMOOTHIES',
}

export default handleActions({
  [HOME_ACTION_TYPES.SET_FETCH_ERROR]: (state, payload) => produce(state, updatedState => {
    updatedState.fetchError = payload;
  }),
}, initialState);