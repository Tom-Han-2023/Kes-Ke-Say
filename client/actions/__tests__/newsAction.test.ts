import { FAILURE_NEWS, fetchNews } from '../newsAction'
import { getNews } from '../../apiClient/news'
import { RootState } from '../../store'
jest.mock('../../apiClient/news')
const dispatch = jest.fn()
const getState = jest.fn(() => ({} as RootState))

describe('fetchNews function', () => {
  it('dispatches failure on error', () => {
    jest
      .mocked(getNews)
      .mockImplementation(() => Promise.reject(new Error('Error')))

    return fetchNews()(dispatch, getState).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: FAILURE_NEWS,
        payload: 'Error',
      })
    })
  })
})
