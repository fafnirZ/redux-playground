import { combineReducers } from "redux";
import { reducer as folderReducer } from './folders/index';

export const rootReducer = combineReducers({
  folders: folderReducer
});
export type RootState = ReturnType<typeof rootReducer>

