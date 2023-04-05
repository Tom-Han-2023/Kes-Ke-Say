import 'dotenv/config'
import { getTopHeadlines } from '../newsApi'
import nock from 'nock'

describe('getTopHeadlines ()', () => {
  const env = process.env

  beforeEach(() => {
    // Mock the external API
    jest.resetModules()
    process.env = { ...env }

    nock('https://newsapi.org', {
      reqheaders: {
        'User-Agent': 'Kes Ke Say News in France',
      },
    })
      .get('/v2/top-headlines?country=fr&apiKey=MOCKAPIKEY')
      .reply(200, {
        article: [
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
  })
  afterEach(() => {
    // Clean up after the tests
    nock.cleanAll()
    process.env = env
  })

  it('should return weather data from api', async () => {
    process.env.NEWS_API_KEY = 'MOCKAPIKEY'
    const [response] = await getTopHeadlines()
    expect(response.author).toBe('Le Monde')
    expect(response.title).toBe(
      `Frénésie médiatique autour de l'arrivée de Donald Trump à New York, la veille de sa comparution - Le Monde`
    )
    expect(response.publishedAt).toBe('2023-04-04T00:02:11Z')
  })
})
