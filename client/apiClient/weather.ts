import request from 'superagent'
import { WeatherData } from '../../models/weather'

export function getWeather(): Promise<WeatherData> {
  return request
    .get('/api/v1/externalapi')
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((error) => {
      return error.message
    })
}
