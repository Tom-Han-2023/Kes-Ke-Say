import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { screen, render, within, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'
import { intialiseStore } from '../../store'

describe('<AllGroups />', () => {
  it('successfully shows a list of groups', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(200, {
        groups: [
          { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
          {
            id: 2,
            name: 'The fast and the curious',
            image: 'car-darkgray.png',
          },
        ],
      })

    render(
      <MemoryRouter initialEntries={['/groups']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const groupCards = await screen.findAllByRole('gridcell')

    expect(groupCards[0]).toBeVisible()
    expect(groupCards).toHaveLength(2)
    expect(groupCards).toMatchInlineSnapshot(`
      [
        <div
          class="bg-white m-3 p-2 flex flex-col content-center justify-between h-40 w-40 border-2 border-black cursor-pointer"
          role="gridcell"
        >
          <div
            class="bg-red-300 rounded-full h-24 w-24 flex justify-center p-2 ml-5"
          >
            <img
              alt="fries-darkgray.png"
              class="w-20 h-20"
              src="./images/icons/fries-darkgray.png"
            />
          </div>
          <p
            class="mt-1"
          >
            friendChips
          </p>
        </div>,
        <div
          class="bg-white m-3 p-2 flex flex-col content-center justify-between h-40 w-40 border-2 border-black cursor-pointer"
          role="gridcell"
        >
          <div
            class="bg-red-300 rounded-full h-24 w-24 flex justify-center p-2 ml-5"
          >
            <img
              alt="car-darkgray.png"
              class="w-20 h-20"
              src="./images/icons/car-darkgray.png"
            />
          </div>
          <p
            class="mt-1"
          >
            The fast and the curious
          </p>
        </div>,
      ]
    `)
    expect(groupCards[1]).toHaveTextContent('The fast and the curious')
    expect(scope.isDone()).toBeTruthy()
  })
  it('should show an error', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(500, { groups: [] })

    render(
      <MemoryRouter initialEntries={['/groups']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByRole('heading')).toBeInTheDocument())

    const errorMessage = await waitFor(() =>
      screen.getByText('There was an error')
    )
    expect(errorMessage).toBeInTheDocument()
    expect(scope.isDone()).toBeTruthy()
  })
  it('should show a loading gif', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(200, {
        groups: [
          { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
          {
            id: 2,
            name: 'The fast and the curious',
            image: 'car-darkgray.png',
          },
        ],
      })

    render(
      <MemoryRouter initialEntries={['/groups']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const loadingGif = await waitFor(() => screen.getByRole('status'))
    expect(loadingGif).toBeInTheDocument()
    expect(scope.isDone()).toBeTruthy()
  })
})
