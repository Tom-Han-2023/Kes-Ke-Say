import { User } from '../../models/user'
import { UserAction } from '../actions/users'

interface UserState {
  loading: boolean
  error: string | undefined
  data: User[]
}

const initialState: UserState = {
  loading: false,
  error: undefined,
  data: [],
}

const reducer = (state = initialState, action: UserAction): UserState => {
  const { type, payload } = action
  switch (type) {
    case 'GET_ALL_PROFILES_REQUEST':
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case 'GET_ALL_PROFILES_SUCCESS':
      return {
        loading: false,
        error: undefined,
        data: payload,
      }

    case 'GET_ALL_PROFILES_ERROR':
      return {
        loading: false,
        error: payload,
        data: [],
      }
    default:
      return state
  }
}

export default reducer
