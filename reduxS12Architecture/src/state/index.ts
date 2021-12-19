import { configureStore } from "@reduxjs/toolkit";
import {rootReducer, RootState} from './reducers';

export default configureStore({
  reducer: rootReducer
})