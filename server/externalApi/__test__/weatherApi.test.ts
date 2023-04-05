import 'dotenv/config'
import { getWeatherData } from '../weatherApi'
import nock from 'nock'

describe('getWeatherData()', () => {
  const env = process.env

  beforeEach(() => {
    // Mock the external API
    jest.resetModules()
    process.env = { ...env }

    nock('http://api.weatherapi.com')
      .get(`/v1/current.json?key=MOCKAPI&q=Auckland`)
      .reply(200, {
        location: {
          name: 'Auckland',
          region: '',
          country: 'New Zealand',
          lat: -36.87,
          lon: 174.77,
          tz_id: 'Pacific/Auckland',
          localtime_epoch: 1680646337,
          localtime: '2023-04-05 10:12',
        },
        current: {
          last_updated_epoch: 1680645600,
          last_updated: '2023-04-05 10:00',
          temp_c: 17,
          temp_f: 62.6,
          is_day: 1,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
          },
          wind_mph: 3.8,
          wind_kph: 6.1,
          wind_degree: 120,
          wind_dir: 'ESE',
          pressure_mb: 1019,
          pressure_in: 30.09,
          precip_mm: 0,
          precip_in: 0,
          humidity: 83,
          cloud: 0,
          feelslike_c: 17,
          feelslike_f: 62.6,
          vis_km: 10,
          vis_miles: 6,
          uv: 5,
          gust_mph: 2.5,
          gust_kph: 4,
        },
      })
  })

  afterEach(() => {
    // Clean up after the tests
    nock.cleanAll()
    process.env = env
  })

  it('should return weather data from API', async () => {
    process.env.API_KEY = 'MOCKAPI'
    const response = await getWeatherData('Auckland')
    expect(response.location.name).toBe('Auckland')
    expect(response.current.temp_c).toBe(17)
    expect(response.current.condition.text).toBe('Sunny')
  })
})
