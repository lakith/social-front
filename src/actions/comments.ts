import axios from 'axios';
import {Dispatch} from 'redux'
import { ActionTypes } from './types';

export interface Comment {
    _id: string;
    commentContent: string;
    post: string;
    activeStatus: boolean;
}

export interface FetchCommentsAction {
    type: ActionTypes.fetchComments
    payload: Comment[]
}

export interface AddCommentsAction {
    type: ActionTypes.addComment
    payload: Comment
}

export const fetchComments = (id: string) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Comment[]>(`http://localhost:3500/api/comment/${id}`)
        dispatch<FetchCommentsAction>({
            type: ActionTypes.fetchComments,
            payload: response.data
        })
    }
}


export const addComment = (comment: Comment) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.post<Comment>('http://localhost:3500/api/comment', {
            "commentContent": comment.commentContent,
            "post": comment.post,
            "activeStatus": comment.activeStatus
        })
        dispatch<AddCommentsAction>({
            type: ActionTypes.addComment,
            payload: response.data
        })
    }
}
