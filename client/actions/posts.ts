import Post from '../../models/post'
import { getPosts } from '../apiClient/posts'

import { Dispatch } from 'redux'
import { ThunkAction } from '../store'

export const SET_POST_PENDING = 'SET_POST_PENDING'
export const SET_POST_SUCCESS = 'SET_POST_SUCCESS'
export const SET_POST_ERROR = 'SET_POST_ERROR'

export type PostAction =
  | {
      type: typeof SET_POST_SUCCESS
      payload: Post[]
    }
  | {
      type: typeof SET_POST_PENDING
      payload: null
    }
  | {
      type: typeof SET_POST_ERROR
      payload: string
    }

export function setPostPending(): PostAction {
  return {
    type: SET_POST_PENDING,
    payload: null,
  }
}

export function setPostSuccess(post: Post[]): PostAction {
  return {
    type: SET_POST_SUCCESS,
    payload: post,
  }
}

export function setPostError(errorMessage: string): PostAction {
  return {
    type: SET_POST_ERROR,
    payload: errorMessage,
  }
}

export function fetchPosts(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setPostPending())
    return getPosts()
      .then((posts) => {
        dispatch(setPostSuccess(posts))
      })
      .catch((err) => {
        dispatch(setPostError(err.message))
      })
  }
}
