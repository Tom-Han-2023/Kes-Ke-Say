import { FAILURE_WEATHER, fetchWeather } from '../weatherAction'
import { getWeather } from '../../apiClient/weather'
import { RootState } from '../../store'
jest.mock('../../apiClient/weather')
const dispatch = jest.fn()
const getState = jest.fn(() => ({} as RootState))

describe('fetchWeather function', () => {
  it('dispatches failure on error', () => {
    jest
      .mocked(getWeather)
      .mockImplementation(() => Promise.reject(new Error('Error')))

    return fetchWeather()(dispatch, getState).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: FAILURE_WEATHER,
        payload: 'Error',
      })
    })
  })
})
