import { sliceState, Folder } from "./types";
import { Action } from '@reduxjs/toolkit';

export function addFolderItems(state: sliceState, payload : Action<Folder>) {
  return {
    ...state,
    payload
  }
}