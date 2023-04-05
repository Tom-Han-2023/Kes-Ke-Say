import { News } from '../../models/news'
import {
  FAILURE_NEWS,
  RECEIVE_NEWS,
  REQUEST_NEWS,
  NewsAction,
} from '../actions/newsAction'

export type NewsState = {
  data: News[] | null
  isLoading: boolean
  error: string | null
}
const initialNewsState: NewsState = {
  data: null,
  isLoading: false,
  error: null,
}

const newsReducer = (state = initialNewsState, action: NewsAction) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_NEWS:
      return { data: payload, isLoading: false, error: null }
    case REQUEST_NEWS:
      return { data: null, isLoading: true, error: null }
    case FAILURE_NEWS:
      return { data: null, isLoading: false, error: payload }
    default:
      return state
  }
}

export default newsReducer
