import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../App'
import { intialiseStore } from '../../store'

describe('<UserProfilePage />', () => {
  it('should show a users profile', async () => {
    const scope = nock('http://localhost').get('/api/v1/users/ida').reply(200, {
      id: 2,
      username: 'ida',
      full_name: 'Ida Dapizza',
      location: 'Auckland',
      image: 'ava-02.png',
    })

    render(
      <MemoryRouter initialEntries={['/profiles/ida']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Profile')).toBeInTheDocument())
    const loadingBanner = await screen.getByText('Loading...')
    expect(loadingBanner).toBeInTheDocument()
    expect(scope.isDone()).toBeTruthy()
  })

  it('should show an error', async () => {
    const scope = nock('http://localhost').get('/api/v1/users/ida').reply(500, {
      users: {},
    })

    render(
      <MemoryRouter initialEntries={['/profiles/ida']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Profile')).toBeInTheDocument())

    const errorBanner = await waitFor(() =>
      screen.getByText('An error occurred')
    )
    expect(errorBanner).toBeInTheDocument()

    expect(scope.isDone()).toBeTruthy()
  })
})
