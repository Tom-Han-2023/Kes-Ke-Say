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
import type { ThunkAction } from '../store'
import { getUserInfo } from '../apiClient/profileindex'
import { User } from '../../models/user'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const FAILURE_USER = 'FAILURE_USER'

export type UserInfoAction =
  | { type: typeof REQUEST_USER }
  | { type: typeof RECEIVE_USER; payload: User }
  | { type: typeof FAILURE_USER; payload: string }

export function requestUser(): UserInfoAction {
  return {
    type: REQUEST_USER,
  }
}

export function receiveUser(user: User): UserInfoAction {
  return {
    type: RECEIVE_USER,
    payload: user,
  }
}

export function failureUser(errorMessage: string): UserInfoAction {
  return {
    type: FAILURE_USER,
    payload: errorMessage,
  }
}

export function fetchUserInfo(username: string): ThunkAction {
  return (dispatch) => {
    dispatch(requestUser())
    return getUserInfo(username)
      .then((user) => {
        dispatch(receiveUser(user))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureUser(`fetchUser error:  ${err.message}`))
        } else {
          dispatch(failureUser('An unknown error occurred'))
        }
      })
  }
}
