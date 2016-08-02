/**
 * # reducers
 * 
 * This class combines all the reducers into one
 * 
 */
'use strict';

import start from './startReducer';
import test from './testReducer';

import { combineReducers } from 'redux';

/**
 * ## CombineReducers
 * 
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */ 
const rootReducer = combineReducers({
  start,
  test,
});

export default rootReducer;
