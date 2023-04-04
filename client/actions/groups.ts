import { ThunkAction } from '../store'
import { getGroups } from '../apiClient/groups'
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

// ADDING A NEW GROUP

// export function addGroup(newFruit: GroupCreate): ThunkAction {
//   return (dispatch) => {
//     return addNewGroup(newGroup)
//       .then((groups: Group[]) => {
//         dispatch(setGroupsSuccess(groups))
//       })
//       .catch((err: Error) => {
//         dispatch(setError(err.message))
//       })
//   }
// }
