import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../App'
import { intialiseStore } from '../../store'

describe('<PostFeed />', () => {
  it('should show a loading banner', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/posts/')
      .reply(200, {
        posts: [
          {
            id: 1,
            user_id: 1,
            body: 'I found this really interesting book, you should check it out',
            image: '',
            created_at: 1680647489666,
            users_username: 'paige',
          },
        ],
      })

    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Post')).toBeInTheDocument())

    const loadingBanner = screen.getByText('loading...')
    expect(loadingBanner).toBeInTheDocument()
    expect(scope.isDone()).toBeTruthy()
  })

  it('should show an error', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/posts/')
      .reply(500, {
        posts: [
          {
            id: 1,
            user_id: 1,
            body: 'I found this really interesting book, you should check it out',
            image: '',
            created_at: 1680647489666,
            users_username: 'paige',
          },
        ],
      })

    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Post')).toBeInTheDocument())

    const loadingBanner = screen.getByText('There was an error')
    expect(loadingBanner).toBeInTheDocument()
    expect(scope.isDone()).toBeTruthy()
  })
})
