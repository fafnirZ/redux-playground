import { configureStore } from "@reduxjs/toolkit";
import {rootReducer, RootState} from './reducers';

/**
 * global store
 */
export default configureStore({
  reducer: rootReducer
})