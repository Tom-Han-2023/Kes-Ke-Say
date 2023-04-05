import '@testing-library/jest-dom'
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Provider } from 'react-redux'
import nock from 'nock'

import { intialiseStore } from '../../store'
import News from '../News'

describe('<News />', () => {
  it('should render News component currently, when its requesting api and rendering the news', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/externalapi/news')
      .reply(200, [
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
      ])
    render(
      <Provider store={intialiseStore()}>
        <News />
      </Provider>
    )

    const loading = await screen.getByText('news is loading')
    expect(loading).toBeInTheDocument()
    const newsList = await screen.findAllByRole('listitem')
    expect(newsList[0]).toBeVisible()
    expect(newsList).toHaveLength(1)
    expect(newsList[0]).toHaveTextContent('Frénésie')
    expect(newsList[0]).toHaveTextContent('Le Monde')
    expect(newsList[0]).toHaveTextContent('2023-04-04T00:02:11Z')
    expect(scope.isDone()).toBeTruthy()
  })
  it('should not render anything if api call failed', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/externalapi/news')
      .reply(500, { error: 'there was an error' })

    render(
      <Provider store={intialiseStore()}>
        <News />
      </Provider>
    )
    await screen.getByText('news is loading')
    await waitForElementToBeRemoved(() => screen.queryByText('news is loading'))

    expect(scope.isDone).toBeTruthy()
  })
})
