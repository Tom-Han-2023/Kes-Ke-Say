import { News } from '../../../models/news'
import {
  FAILURE_NEWS,
  RECEIVE_NEWS,
  REQUEST_NEWS,
  NewsAction,
} from '../../actions/newsAction'
import newsReducer from '../newsReducer'
import type { NewsState } from '../newsReducer'

const date = new Date(Date.now())

const testItem: News[] = [
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
    publishedAt: date,
    content: null,
  },
  {
    source: {
      id: 'google-news',
      name: 'Google News',
    },
    author: 'BFMTV',
    title:
      '"Un problème sanitaire majeur": selon l\'OMS, une personne sur six dans le monde souffre d\'infertilité - BFMTV',
    description: null,
    url: 'https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy5iZm10di5jb20vaW50ZXJuYXRpb25hbC91bi1wcm9ibGVtZS1zYW5pdGFpcmUtbWFqZXVyLXNlbG9uLWwtb21zLXVuZS1wZXJzb25uZS1zdXItc2l4LWRhbnMtbGUtbW9uZGUtc291ZmZyZS1kLWluZmVydGlsaXRlX0FELTIwMjMwNDAzMDgzOS5odG1s0gGeAWh0dHBzOi8vd3d3LmJmbXR2LmNvbS9hbXAvaW50ZXJuYXRpb25hbC91bi1wcm9ibGVtZS1zYW5pdGFpcmUtbWFqZXVyLXNlbG9uLWwtb21zLXVuZS1wZXJzb25uZS1zdXItc2l4LWRhbnMtbGUtbW9uZGUtc291ZmZyZS1kLWluZmVydGlsaXRlX0FELTIwMjMwNDAzMDgzOS5odG1s?oc=5',
    urlToImage: null,
    publishedAt: date,
    content: null,
  },
]

const initialWeatherState: NewsState = {
  data: null,
  isLoading: false,
  error: null,
}
const receiveAction: NewsAction = {
  type: RECEIVE_NEWS,
  payload: testItem,
}

const failureItem = 'something'

const failureAction: NewsAction = {
  type: FAILURE_NEWS,
  payload: failureItem,
}

const requestAction: NewsAction = {
  type: REQUEST_NEWS,
  payload: null,
}

describe('weather reducer', () => {
  it('should return a new state with data', () => {
    const expected = { data: testItem, isLoading: false, error: null }

    expect(newsReducer(initialWeatherState, receiveAction)).toStrictEqual(
      expected
    )
  })
  it('should update state to a loading state', () => {
    const expected = { data: null, isLoading: true, error: null }

    expect(newsReducer(initialWeatherState, requestAction)).toStrictEqual(
      expected
    )
  })
  it('should update state to a error state', () => {
    const expected = { data: null, isLoading: false, error: failureItem }

    expect(newsReducer(initialWeatherState, failureAction)).toStrictEqual(
      expected
    )
  })
})
