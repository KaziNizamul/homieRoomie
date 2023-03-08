// external imports
import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
// components
import homePageReducer from '../pages/Home/data/home.reducer';

export const defaultReducers = {
  homePageReducer,
};
export const rootReducer = combineReducers(defaultReducers);
const store = createStore(rootReducer);

export default store;
