import {
  SET_GROUPS_PENDING,
  SET_GROUPS_SUCCESS,
  SET_ERROR,
  GroupAction,
} from '../actions/groups'
import { Group } from '../../models/group'

interface GroupState {
  loading: boolean
  error: string | undefined
  data: Group[]
}

const initialState: GroupState = {
  loading: false,
  error: undefined,
  data: [],
}

const reducer = (state = initialState, action: GroupAction): GroupState => {
  switch (action.type) {
    case SET_GROUPS_PENDING:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_GROUPS_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

export default reducer
