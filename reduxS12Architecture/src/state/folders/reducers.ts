import { sliceState, Folder } from "./types";

export function addFolderItems(state: sliceState, payload : Folder) {
  return {
    ...state,
    payload
  }
}