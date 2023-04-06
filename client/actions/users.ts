import { ThunkAction } from '../store'
import { fetchallProfiles } from '../apiClient/users'
import { User } from '../../models/user'

export type UserAction =
  | { type: 'GET_ALL_PROFILES_REQUEST'; payload: null }
  | { type: 'GET_ALL_PROFILES_SUCCESS'; payload: User[] }
  | { type: 'GET_ALL_PROFILES_ERROR'; payload: string }

export function profilesRequest(): UserAction {
  return {
    type: 'GET_ALL_PROFILES_REQUEST',
    payload: null,
  }
}

export function profilesSuccess(users: User[]): UserAction {
  return {
    type: 'GET_ALL_PROFILES_SUCCESS',
    payload: users,
  }
}

export function profilesError(errMessage: string): UserAction {
  return {
    type: 'GET_ALL_PROFILES_ERROR',
    payload: errMessage,
  }
}

export const getAllProfiles = (): ThunkAction => async (dispatch) => {
  dispatch(profilesRequest())
  try {
    const data = await fetchallProfiles()
    dispatch(profilesSuccess(data))
  } catch (error) {
    dispatch(profilesError((error as Error).message))
  }
}
