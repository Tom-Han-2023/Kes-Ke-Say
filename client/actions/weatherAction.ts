export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const FAILURE_WEATHER = 'FAILURE_WEATHER'
import { WeatherData } from '../../models/weather'
import { getWeather } from '../api/weather'
import { ThunkAction } from '../store'

export type WeatherAction =
  | { type: typeof REQUEST_WEATHER; payload: null }
  | { type: typeof RECEIVE_WEATHER; payload: WeatherData }
  | { type: typeof FAILURE_WEATHER; payload: string }

export function requestWeather(): WeatherAction {
  return {
    type: REQUEST_WEATHER,
    payload: null,
  }
}

export function receiveWeather(weather: WeatherData): WeatherAction {
  return {
    type: RECEIVE_WEATHER,
    payload: weather,
  }
}

export function failureWeather(errorMessage: string): WeatherAction {
  return {
    type: FAILURE_WEATHER,
    payload: errorMessage,
  }
}

export function fetchWeather(): ThunkAction {
  return (dispatch) => {
    dispatch(requestWeather())
    return getWeather()
      .then((weather) => {
        dispatch(receiveWeather(weather))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureWeather(err.message))
        } else {
          dispatch(failureWeather('An unknown error occurred'))
        }
      })
  }
}
