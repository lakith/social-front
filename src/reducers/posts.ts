import {
    FetchPostsAction,
    Post,
    AddPostsAction,
  } from "../actions/post";
import { ActionTypes } from "../actions/types";

export type Actions =
  | FetchPostsAction
  | AddPostsAction

export const postReducer = (state: Post[] = [], action: Actions) => {
  switch (action.type) {
    case ActionTypes.fetchPosts:
      return action.payload;
    case ActionTypes.addPosts:
      return state.concat(action.payload);
    default:
      return state;
  }
};

