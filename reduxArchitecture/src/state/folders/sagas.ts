import { call, put, takeEvery } from "@redux-saga/core/effects";
import { addFolderItemAction } from "./actions";
import { Folder } from "./types";

function* addFolderItem({payload: folder} : {payload: Folder}) {
  yield call(console.log, 'hi')
  yield put(addFolderItemAction, );

}

// watcher
export function* rootFolderSaga() {
  yield takeEvery(addFolderItemAction, addFolderItem);
  // add more takeEvery for parallel watchers
}

// export function* rootFolderSaga2() {
//   yield takeEvery(addFolderItemAction, addFolderItem);
//   // add more takeEvery for parallel watchers
// }


