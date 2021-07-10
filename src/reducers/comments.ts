import {
    FetchCommentsAction,
    Comment,
    AddCommentsAction,
  } from "../actions/comments";

import { ActionTypes } from "../actions/types";

export type Actions =
  | FetchCommentsAction
  | AddCommentsAction

export const commentReducer = (state: Comment[] = [], action: Actions) => {
  switch (action.type) {
    case ActionTypes.fetchComments:
      return action.payload;
    case ActionTypes.addComment:
      return state.concat(action.payload);
    default:
      return state;
  }
};