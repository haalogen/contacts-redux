import { combineReducers } from 'redux';

import contacts from './contacts';
import queryString from './queryString';


function rootReducer(state = {}, action) {
  return {
    contacts: contacts(state.contacts, action),
    queryString: queryString(state.queryString, action)
  }
}

export default rootReducer;