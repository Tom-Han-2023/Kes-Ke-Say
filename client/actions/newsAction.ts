export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const REQUEST_NEWS = 'REQUEST_NEWS'
export const FAILURE_NEWS = 'FAILURE_NEWS'
import { News } from '../../models/news'
import { getNews } from '../apiClient/news'
import { ThunkAction } from '../store'

export type NewsAction =
  | { type: typeof REQUEST_NEWS; payload: null }
  | { type: typeof RECEIVE_NEWS; payload: News[] }
  | { type: typeof FAILURE_NEWS; payload: string }

export function requestNews(): NewsAction {
  return {
    type: REQUEST_NEWS,
    payload: null,
  }
}

export function receiveNews(news: News[]): NewsAction {
  return {
    type: RECEIVE_NEWS,
    payload: news,
  }
}

export function failureNews(errorMessage: string): NewsAction {
  return {
    type: FAILURE_NEWS,
    payload: errorMessage,
  }
}

export function fetchNews(): ThunkAction {
  return (dispatch) => {
    dispatch(requestNews())
    return getNews()
      .then((news) => {
        dispatch(receiveNews(news))
      })
      .catch((err) => {
        dispatch(failureNews(err.message))
      })
  }
}
