import { FAILURE_WEATHER, fetchWeather, requestWeather } from '../weatherAction'
import { getWeather } from '../../apiClient/weather'
import { WeatherAction } from '../weatherAction'

jest.mock('../../apiClient/weather')
const dispatch = jest.fn()
describe('fetchWeather function', () => {
  it('dispatches failure on error', () => {
    jest
      .mocked(getWeather)
      .mockImplementation(() => Promise.reject(new Error('Error')))
    

    return fetchWeather()
    (dispatch)=> {
      dispatch(requestWeather())
    }.then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: FAILURE_WEATHER,
        payload: 'Error',
      })
    })
  })
})
