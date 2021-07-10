import { combineReducers } from 'redux';
import { postReducer } from './posts';
import { commentReducer } from './comments'
import { Post } from '../actions/post';
import { Comment } from '../actions/comments';

export interface StoreState {
    posts: Post[]
    comments: Comment[]
}

const RootReducer = combineReducers<StoreState>({
    posts: postReducer,
    comments: commentReducer
});

export default RootReducer;