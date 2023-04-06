import {
  SET_POST_PENDING,
  SET_POST_SUCCESS,
  SET_POST_ERROR,
  ADD_POST_SUCCESS,
  PostAction,
} from '../actions/posts'
import Post from '../../models/post'

export interface PostState {
  loading: boolean
  error: string | undefined
  data: Post[]
}

const initialState: PostState = {
  loading: false,
  error: undefined,
  data: [],
}

const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case SET_POST_PENDING:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_POST_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    case ADD_POST_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: [...state.data, action.payload],
      }
    default:
      return state
  }
}

export default postReducer
