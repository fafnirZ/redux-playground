import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import * as reducerFns from './reducers';
import * as folderSelector from './selectors';
import * as folderAct from './actions';
import * as folderSagas from './sagas';
import { Folder } from './types';

// make sure action name is same as reducer name
const reducer = createReducer(initialState, (builder) => {
  // addCase(action, reducer)
  builder.addCase(folderAct.addFolderItemAction, reducerFns.addFolderItems);
});

export { reducer, folderSelector, folderAct, folderSagas };