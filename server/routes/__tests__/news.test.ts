import request from 'supertest'
import server from '../../server'
import nock from 'nock'

describe('GET /api/v1/newsapi', () => {
  const env = process.env

  beforeEach(() => {
    // Mock the external API
    jest.resetModules()
    process.env = { ...env }
  })
  afterEach(() => {
    // Clean up after the tests
    process.env = env
  })

  it('returns the top headlines', async () => {
    nock('https://newsapi.org', {
      reqheaders: {
        'User-Agent': 'Kes Ke Say News in France',
      },
    })
      .get('/v2/top-headlines?country=fr&apiKey=MOCKAPIKEY')
      .reply(200, {
        articles: [
          {
            source: {
              id: 'google-news',
              name: 'Google News',
            },
            author: 'Le Monde',
            title:
              "Frénésie médiatique autour de l'arrivée de Donald Trump à New York, la veille de sa comparution - Le Monde",
            description: null,
            url: 'https://news.google.com/rss/articles/CBMiqAFodHRwczovL3d3dy5sZW1vbmRlLmZyL2ludGVybmF0aW9uYWwvYXJ0aWNsZS8yMDIzLzA0LzA0L2ZyZW5lc2llLW1lZGlhdGlxdWUtYXV0b3VyLWRlLWwtYXJyaXZlZS1kZS1kb25hbGQtdHJ1bXAtYS1uZXcteW9yay1sYS12ZWlsbGUtZGUtc2EtY29tcGFydXRpb25fNjE2ODEzM18zMjEwLmh0bWzSAQA?oc=5',
            urlToImage: null,
            publishedAt: '2023-04-04T00:02:11Z',
            content: null,
          },
        ],
      })
    process.env.NEWS_API_KEY = 'MOCKAPIKEY'
    const response = await request(server).get('/api/v1/newsapi')

    expect(response.status).toBe(200)

    expect(response.body[0].title).toBe(
      `Frénésie médiatique autour de l'arrivée de Donald Trump à New York, la veille de sa comparution - Le Monde`
    )
    expect(response.body[0].author).toBe('Le Monde')
    expect(response.body[0].publishedAt).toBe('2023-04-04T00:02:11Z')
  })

  it('returns 500 when fail to get news', async () => {
    nock('https://newsapi.org', {
      reqheaders: {
        'User-Agent': 'Kes Ke Say News in France',
      },
    })
      .get('/v2/top-headlines?country=fr&apiKey=MOCKAPIKEY')
      .reply(500)
    process.env.NEWS_API_KEY = 'MOCKAPIKEY'

    const response = await request(server).get('/api/v1/newsapi')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('There was an error trying to get news:(')
  })
})
