import request from 'supertest'
import server from '../../server'
import { getTopHeadlines } from '../../externalApi/newsApi'

jest.mock('../../externalApi/weatherApi')
jest.mock('../../externalApi/newsApi')
jest.mock('../../db/functions/users')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET /api/v1/newsapi', () => {
  it('returns the top headlines', async () => {
    const mockArticles = [
      { title: 'Article 1' },
      { title: 'Article 2' },
      { title: 'Article 3' },
    ]
    jest.mocked(getTopHeadlines).mockResolvedValue(mockArticles)

    const response = await request(server).get('/api/v1/newsapi')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockArticles)
  })

  it('returns 500 when fail to get news', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest
      .mocked(getTopHeadlines)
      .mockRejectedValue(new Error('it did not work :('))

    const response = await request(server).get('/api/v1/newsapi')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('There was an error trying to get news:(')
  })
})
