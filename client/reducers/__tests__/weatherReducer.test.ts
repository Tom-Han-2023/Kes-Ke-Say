import { WeatherData } from '../../../models/weather'
import {
  FAILURE_WEATHER,
  RECEIVE_WEATHER,
  REQUEST_WEATHER,
  WeatherAction,
} from '../../actions/weatherAction'
import weatherReducer from '../weatherReducer'
import type { WeatherState } from '../weatherReducer'

const testItem: WeatherData = {
  location: {
    name: 'Wellington',
    region: '',
    country: 'New Zealand',
    lat: -41.3,
    lon: 174.78,
    tz_id: 'Pacific/Auckland',
    localtime_epoch: 1680565941,
    localtime: '2023-04-04 11:52',
  },
  current: {
    last_updated_epoch: 1680565500,
    last_updated: '2023-04-04 11:45',
    temp_c: 15.0,
    temp_f: 59.0,
    is_day: 0,
    condition: {
      text: 'Clear',
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      code: 1000,
    },
    wind_mph: 5.6,
    wind_kph: 9.0,
    wind_degree: 170,
    wind_dir: 'S',
    pressure_mb: 1021.0,
    pressure_in: 30.15,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 77,
    cloud: 0,
    feelslike_c: 14.5,
    feelslike_f: 58.1,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 1.0,
    gust_mph: 10.5,
    gust_kph: 16.9,
  },
}

const initialWeatherState: WeatherState = {
  data: null,
  isLoading: false,
  error: null,
}
const receiveAction: WeatherAction = {
  type: RECEIVE_WEATHER,
  payload: testItem,
}

const failureItem = 'something'

const failureAction: WeatherAction = {
  type: FAILURE_WEATHER,
  payload: failureItem,
}

const requestAction: WeatherAction = {
  type: REQUEST_WEATHER,
  payload: null,
}

describe('weather reducer', () => {
  it('should return a new state with data', () => {
    const expected = { data: testItem, isLoading: false, error: null }

    expect(weatherReducer(initialWeatherState, receiveAction)).toStrictEqual(
      expected
    )
  })
  it('should update state to a loading state', () => {
    const expected = { data: null, isLoading: true, error: null }

    expect(weatherReducer(initialWeatherState, requestAction)).toStrictEqual(
      expected
    )
  })
  it('should update state to a error state', () => {
    const expected = { data: null, isLoading: false, error: failureItem }

    expect(weatherReducer(initialWeatherState, failureAction)).toStrictEqual(
      expected
    )
  })
})

// state: asdasd
// action : {type: RECEIVE_WEATHER : payload: {weather: sunny}}
//  const response = weatherReducer(state, action  )
// expect the response(asdasda)
