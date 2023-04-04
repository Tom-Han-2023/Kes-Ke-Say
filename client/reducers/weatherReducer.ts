import { WeatherData } from '../../models/weather'
import {
  FAILURE_WEATHER,
  RECEIVE_WEATHER,
  REQUEST_WEATHER,
  WeatherAction,
} from '../actions/weatherAction'

type WeatherState = {
  data: WeatherData | null
  isLoading: boolean
  error: string | null
}
const initialWeatherState: WeatherState = {
  data: null,
  isLoading: false,
  error: null,
}

const weatherReducer = (state = initialWeatherState, action: WeatherAction) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_WEATHER:
      return { data: payload, isLoading: false, error: null }
    case REQUEST_WEATHER:
      return { data: null, isLoading: true, error: null }
    case FAILURE_WEATHER:
      return { data: null, isLoading: false, error: payload }
    default:
      return state
  }
}

export default weatherReducer
