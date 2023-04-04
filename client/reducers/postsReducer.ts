import {
  SET_POST_PENDING,
  SET_POST_SUCCESS,
  SET_POST_ERROR,
  PostAction,
} from '../actions/index'
import Post from '../../models/post'

export interface PostState {
  loading: boolean
  error: string | undefined
  data: Post[]
}

const initialState: PostState = {
  loading: false,
  error: undefined,
  data: [
    {
      id: 1,
      user_id: 1,
      body: 'I found this really interesting book, you should check it out',
      image: '',
      created_at: 2023,
    },
    {
      id: 2,
      user_id: 2,
      body: 'Loving your work!',
      image: '',
      created_at: 2023,
    },
    {
      id: 1,
      user_id: 2,
      body: 'Great job Guys!',
      image: '',
      created_at: 2023,
    },
    {
      id: 4,
      user_id: 3,
      body: 'We love REDUX!!!!!',
      image: '',
      created_at: 2023,
    },
  ],
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
    default:
      return state
  }
}

export default postReducer
