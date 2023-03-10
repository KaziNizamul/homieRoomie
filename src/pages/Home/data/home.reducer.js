// external imports
import produce from 'immer';
import { handleActions } from 'redux-actions';

const initialState = {
  user: null,
  supabase: null,
};

export const HOME_ACTION_TYPES = {
  SET_USER: 'SET_USER',
  SET_SUPABASE: 'SET_SUPABASE',
}

export default handleActions({
  [HOME_ACTION_TYPES.SET_USER]: (state, { payload }) => produce(state, updatedState => {
    updatedState.user = payload;
  }),
  [HOME_ACTION_TYPES.SET_SUPABASE]: (state, { payload }) => produce(state, updatedState => {
    updatedState.supabase = payload;
  }),
}, initialState);