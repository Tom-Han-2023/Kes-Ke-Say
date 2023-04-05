import 'dotenv/config'
import { getWeatherData } from '../weatherApi'

describe('getWeatherData()', () => {
  it('should return weather data from api', async () => {
    const response = await getWeatherData('Auckland')
        expect(response.location.name).toBe('Auckland')
  })
})
