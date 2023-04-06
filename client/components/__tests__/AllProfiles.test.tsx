import nock from 'nock'

import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { screen, render, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'

import App from '../App'
import { intialiseStore } from '../../store'

describe('<AllProfiles />', () => {
  it('should show a list of users', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users')
      .reply(200, {
        users: [
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
        <MemoryRouter initialEntries={['/profiles']}>
          <Provider store={intialiseStore()}>
            <App />
          </Provider>
        </MemoryRouter>
      )

      const image = await waitFor(() => screen.getByAltText(/profile of/i))
      expect(image).toBeInTheDocument()
      expect(scope.isDone()).toBeTruthy()
  })
  it('should return an error', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users')
      .reply(500, {
        users: [
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
        <MemoryRouter initialEntries={['/profiles']}>
          <Provider store={intialiseStore()}>
            <App />
          </Provider>
        </MemoryRouter>
      )
      const error = await waitFor(() => screen.getByText(/error/i))
      expect(error).toBeInTheDocument()
      expect(scope.isDone()).toBeTruthy()
  })
  
})
