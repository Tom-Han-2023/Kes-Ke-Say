import { ThunkAction } from '../store' // we'll use this later when we write thunk actions
// import {} from '../apis'
import { Group } from '../../models/group'

export const SET_GROUPS_PENDING = 'SET_GROUPS_PENDING'
export const SET_GROUPS_SUCCESS = 'SET_GROUPS_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type GroupAction =
  | { type: typeof SET_GROUPS_PENDING; payload: null }
  | { type: typeof SET_GROUPS_SUCCESS; payload: Group[] }
  | { type: typeof SET_ERROR; payload: string }

export function setGroupsPending(): GroupAction {
  return {
    type: SET_GROUPS_PENDING,
    payload: null,
  }
}

export function setGroupsSuccess(groups: Group[]): GroupAction {
  return {
    type: SET_GROUPS_SUCCESS,
    payload: groups,
  }
}

export function setError(errMessage: string): GroupAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}
