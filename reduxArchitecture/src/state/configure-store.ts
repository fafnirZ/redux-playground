import { configureStore } from "@reduxjs/toolkit";
import {rootReducer, RootState} from './reducers';

import createSagaMiddleware from "@redux-saga/core";
import { all, call } from 'redux-saga/effects';

import * as foldersSaga from './folders/sagas';

/**
 * saga middlewhere
 */
const sagaMiddleware = createSagaMiddleware();

function* getSagas() {
  yield all([
    call(foldersSaga.rootFolderSaga),
    // call(foldersSaga.rootFolderSaga2)
  ])
}

/**
 * global store
 */
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(getSagas);

