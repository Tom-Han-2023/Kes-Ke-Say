import request from 'supertest'
import server from '../../server'
import { getUserLocation } from '../../db/functions/users'
import { getTopHeadlines } from '../../externalApi/newsApi'
import { getWeatherData } from '../../externalApi/weatherApi'
jest.mock('../../externalApi/weatherApi')
jest.mock('../../externalApi/newsApi')
jest.mock('../../db/functions/users')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET /api/v1/externalApi/weather', () => {
  it('returns the weather data', async () => {
    const mockResponse = {
      location: {
        name: 'Auckland',
      },
      current: {
        temp_c: 17,
      },
    }

    jest.mocked(getUserLocation).mockResolvedValue([{ location: 'Auckland' }])
    jest.mocked(getWeatherData).mockResolvedValue(mockResponse)

    const response = await request(server).get('/api/v1/externalApi/weather')

    expect(response.status).toBe(200)
    expect(response.body.location.name).toBe('Auckland')
    expect(response.body.current.temp_c).toBe(17)
  })

  it('returns 500 when fail to get location from database', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest
      .mocked(getUserLocation)
      .mockRejectedValue(new Error('it did not work :('))

    const response = await request(server).get('/api/v1/externalApi/weather')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe(
      'There was an error trying to get the weather :('
    )
  })
  it('returns 500 when fail to get weather data from api', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.mocked(getUserLocation).mockResolvedValue([{ location: 'Auckland' }])
    jest
      .mocked(getWeatherData)
      .mockRejectedValue(new Error('it did not work :('))

    const response = await request(server).get('/api/v1/externalApi/weather')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe(
      'There was an error trying to get the weather :('
    )
  })
})

describe('GET /api/v1/externalApi/news', () => {
  it('returns the top headlines', async () => {
    const mockArticles = [
      { title: 'Article 1' },
      { title: 'Article 2' },
      { title: 'Article 3' },
    ]
    jest.mocked(getTopHeadlines).mockResolvedValue(mockArticles)

    const response = await request(server).get('/api/v1/externalApi/news')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockArticles)
  })

  it('returns 500 when fail to get news', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest
      .mocked(getTopHeadlines)
      .mockRejectedValue(new Error('it did not work :('))

    const response = await request(server).get('/api/v1/externalApi/news')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('There was an error trying to get news:(')
  })
})
