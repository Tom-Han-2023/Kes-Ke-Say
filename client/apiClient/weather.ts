import request from 'superagent'
import { WeatherData } from '../../models/weather'

export function getWeather(): Promise<WeatherData> {
  return request.get('/api/v1/externalapi').then((res) => {
    return res.body
  })
}
