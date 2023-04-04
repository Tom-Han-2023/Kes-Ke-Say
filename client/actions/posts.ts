import Post from '../../models/post'

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
