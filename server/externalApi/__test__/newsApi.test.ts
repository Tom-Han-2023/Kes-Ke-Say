import 'dotenv/config'
import { getTopHeadlines } from '../newsApi'

describe('getTopHeadlines ()', () => {
  it('should return weather data from api', async () => {
    const response = await getTopHeadlines()
    expect(response).toBeTruthy()
  })
})
