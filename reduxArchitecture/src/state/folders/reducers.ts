import { PayloadAction } from "@reduxjs/toolkit";
import { sliceState, Folder } from "./types";

export const addFolderItems = (state: sliceState, action:PayloadAction<Folder>) => {
  const newFolder: Folder = action.payload;
  return {
    ...state,
    items: [
      ...state.items,
      newFolder
    ]
  }
}