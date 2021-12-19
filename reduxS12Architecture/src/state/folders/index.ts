import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import * as reducerFns from './reducers';
import * as folderSelector from './selectors';
import * as folderAct from './actions';

const reducer = createReducer(initialState, reducerFns);

export { reducer, folderSelector, folderAct };