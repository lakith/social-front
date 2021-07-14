import axios from 'axios';
import {Dispatch} from 'redux'
import { ActionTypes } from './types';

export interface Post {
    _id: string;
    title: string;
    postContent: string;
    activeStatus: boolean;
    comments: [string]
}

export interface FetchPostsAction {
    type: ActionTypes.fetchPosts
    payload: Post[]
}

export interface AddPostsAction {
    type: ActionTypes.addPosts
    payload: Post
}

export const fetchPosts = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Post[]>('http://localhost:3500/api/post')
        dispatch<FetchPostsAction>({
            type: ActionTypes.fetchPosts,
            payload: response.data
        })
    }
}


export const addPosts = (post: Post) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.post<Post>('http://localhost:3500/api/post', {
            "title": post.title,
            "postContent": post.postContent,
            "activeStatus": post.activeStatus
        })
        dispatch<AddPostsAction>({
            type: ActionTypes.addPosts,
            payload: response.data
        })
    }
}
