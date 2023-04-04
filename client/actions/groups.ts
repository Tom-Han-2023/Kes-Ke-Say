import { ThunkAction } from '../store' // we'll use this later when we write thunk actions
import { getGroups } from '../apiClient/groups' // use when we write thunk?
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

export function fetchGroups(): ThunkAction {
  return (dispatch) => {
    dispatch(setGroupsPending())
    return getGroups()
      .then((groups) => {
        dispatch(setGroupsSuccess(groups))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addGroup(newFruit: GroupCreate): ThunkAction {
  return (dispatch) => {
    return addNewGroup(newFruit)
      .then((fruits) => {
        dispatch(setFruitsSuccess(fruits))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
