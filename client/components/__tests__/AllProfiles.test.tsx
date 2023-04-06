import nock from 'nock'

import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import '@testing-library/jest-dom'

import App from '../App'
import { intialiseStore } from '../../store'

describe('<AllProfiles />', () => {
  it('should show a loading banner', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users/')
      .reply(200, {
        posts: [
          {
            id: 1,
            auth0_id: 'auth0|123',
            username: 'paige',
            full_name: 'Paige Turner',
            location: 'Auckland',
            image: 'ava-03.png',
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

    await 
  })
})
